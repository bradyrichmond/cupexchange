import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { Refresh } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router';
import { Storage } from '@aws-amplify/storage';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteStore, getSingleStoreData, selectCurrentStoreData } from './StoresSlice';
import FileUpload from '../../utils/FileUpload';
import { DataStore } from 'aws-amplify';
import { Lego } from '../../models';
import { createStoreInventory, getStoreInventory, selectCurrentStoreInventory } from './InventorySlice';
import { formatRelative } from 'date-fns';
import { selectUserCognitoGroups } from '../User/UserSlice';
import DeleteStoreModal from './DeleteStoreModal';

const StoreData = () => {
    const { id } = useParams();
    const [isAddingInventory, setIsAddingInventory] = useState(false);
    const [isDeletingStore, setIsDeletingStore] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const currentStoreData = useAppSelector(selectCurrentStoreData);
    const currentStoreInventory = useAppSelector(selectCurrentStoreInventory);
    const userGroups = useAppSelector(selectUserCognitoGroups);
    const userIsModerator = userGroups.includes('moderators');
    const relativeUpdatedAt = currentStoreData?.updatedAt ? formatRelative(Date.parse(currentStoreData?.updatedAt ?? ''), Date.now()) : 'error';

    const startAddingInventory = () => {
        setIsAddingInventory(true);
    }

    const stopAddingInventory = () => {
        setIsAddingInventory(false);
    }

    const startDeletingStore = () => {
        setIsDeletingStore(true);
    }

    const confirmDeleteStore = () => {
        if (id) {
            dispatch(deleteStore(id))
        }
        navigate('/stores');
    }

    const stopDeletingStore = () => {
        setIsDeletingStore(false);
    }

    const handleFileUploadComplete = async (results: (string | undefined)[]) => {
        stopAddingInventory();
        if (id) {
            const legos: string[] = [];
            for(let i = 0; i < results.length; i++) {
                if (results[i]) {
                    const lego = await DataStore.save(new Lego({ imageKey: results[i] ?? '' }));
                    legos.push(lego.id);
                }
            }

            await dispatch(createStoreInventory({items: legos, storeId: id}));
            await dispatch(getSingleStoreData(id));
        }
    }

    useEffect(() => {
        dispatch(getSingleStoreData(id ?? ''));
    }, [id])

    useEffect(() => {
        dispatch(getStoreInventory(currentStoreData?.inventoryId ?? ''));
    }, [currentStoreData?.inventoryId])

    return (
        <Box display='flex' flexDirection='column' margin='2rem'>
            <Modal
                open={isAddingInventory}
                onClose={stopDeletingStore}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box height="100%" width="100%" display='flex' justifyContent='center' alignItems='center' borderRadius='1rem' padding='2rem'>
                    <FileUpload onComplete={handleFileUploadComplete} />
                </Box>
            </Modal>
            <Modal
                open={isDeletingStore}
                onClose={() => setIsDeletingStore(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box height="100%" width="100%" display='flex' justifyContent='center' alignItems='center' borderRadius='1rem' padding='2rem'>
                    <DeleteStoreModal cancel={stopDeletingStore} confirm={confirmDeleteStore} storeName={currentStoreData?.name ?? ' this store'} />
                </Box>
            </Modal>
            <Box flex='row'>
                <Typography fontSize='3rem' display='inline-block'>{currentStoreData?.name}</Typography>
                <Typography fontSize='2rem' color='#ccc' paddingLeft='1rem' display='inline-block'>{`${currentStoreData?.city}, ${currentStoreData?.district}`}</Typography>
            </Box>
            <Box flex='1' paddingTop='2rem' borderTop='1px solid rgba(246,236,54,255)'>
                <Box marginBottom='2rem' display='flex' flexDirection='row'>
                    <Box flex='1'>
                        <Typography>Store Inventory as of {relativeUpdatedAt}</Typography>
                    </Box>
                    <Box flex='1' display='flex' justifyContent='flex-end' flexDirection='row'>
                        <Button onClick={startAddingInventory}><Refresh />Update Inventory</Button>
                        {userIsModerator && <Button onClick={startDeletingStore}>Delete Store</Button>}
                    </Box>
                </Box>
                <Box display='flex' flexDirection='row'>
                    {currentStoreInventory?.map((inv) => {
                        return (
                            <InventoryItem imageKey={inv?.imageKey} key={inv?.id}/>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    )
}

interface InventoryItemProps{
    imageKey: string | undefined
}

const InventoryItem = (props: InventoryItemProps) => {
    const { imageKey } = props;
    const [url, setUrl] = useState('')

    useEffect(() => {
        if (imageKey) {
            const getUrl = async () => {
                const url = await Storage.get(imageKey);
                setUrl(url);
            }

            getUrl();
        }
    })

    return (
        <Box border='2px solid rgba(246,236,54,255)' borderRadius='1rem' padding='2rem' margin='2rem' flex='1' minWidth='200px'>
            <img src={url} alt="" width='100%' height='100%'/>
        </Box>
    )
}

export default StoreData;
