import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useParams } from 'react-router';
import { PutResult, Storage } from '@aws-amplify/storage';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSingleStoreData, selectCurrentStoreData } from './StoresSlice';
import FileUpload from '../../utils/FileUpload';
import { DataStore } from 'aws-amplify';
import { Lego } from '../../models';
import { createStoreInventory, getStoreInventory, selectCurrentStoreInventory } from './InventorySlice';

const StoreData = () => {
    const { id } = useParams();
    const [isAddingInventory, setIsAddingInventory] = useState(false);
    const dispatch = useAppDispatch();
    const currentStoreData = useAppSelector(selectCurrentStoreData);
    const currentStoreInventory = useAppSelector(selectCurrentStoreInventory);

    const startAddingInventory = () => {
        setIsAddingInventory(true);
    }

    const stopAddingInventory = () => {
        setIsAddingInventory(false);
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
                onClose={stopAddingInventory}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <FileUpload onComplete={handleFileUploadComplete} />
            </Modal>
            <Box marginBottom='2rem'>
                <Button onClick={startAddingInventory}><Add />Add Inventory</Button>
            </Box>
            <Box>
                <Typography>{currentStoreData?.name}</Typography>
                <Typography>{`${currentStoreData?.city}, ${currentStoreData?.district}`}</Typography>
            </Box>
            <Box flex={1}>
                <Typography>Store Inventory as of Date</Typography>
                {currentStoreInventory?.map((inv) => {
                    return (
                        <Box>
                            <InventoryItem imageKey={inv?.imageKey} key={inv?.id}/>
                        </Box>
                    );
                })}
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
        <Box>
            <img src={url} alt="" width='100px' height='100px'/>
        </Box>
    )
}

export default StoreData;
