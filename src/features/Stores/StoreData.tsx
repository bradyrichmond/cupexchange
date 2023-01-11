import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { AddCircleOutline, Refresh, RemoveCircleOutline } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router';
import { Storage } from '@aws-amplify/storage';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteStoreMutation, getSingleStoreData, selectCurrentStoreData } from './StoresSlice';
import FileUpload from '../../utils/FileUpload';
import { DataStore } from 'aws-amplify';
import { Lego } from '../../models';
import { createStoreInventory } from './InventorySlice';
import { formatRelative, parseISO } from 'date-fns';
import { selectUserCognitoGroups } from '../User/UserSlice';
import DeleteStoreModal from './DeleteStoreModal';
import { selectCartItems, updateItem } from '../Orders/CartSlice';

let initialInventory: Lego[] | undefined;

const StoreData = () => {
    const { id } = useParams();
    const [isAddingInventory, setIsAddingInventory] = useState(false);
    const [isDeletingStore, setIsDeletingStore] = useState(false);
    const [inventory, setInventory] = useState(initialInventory);
    const [inventoryUpdatedAt, setInventoryUpdatedAt] = useState('')
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const currentStoreData = useAppSelector(selectCurrentStoreData);
    const userGroups = useAppSelector(selectUserCognitoGroups);
    const userIsModerator = userGroups.includes('moderators');
    const relativeUpdatedAt = inventory ? formatRelative(parseISO(inventoryUpdatedAt), Date.now()) : 'loading...';

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
            dispatch(deleteStoreMutation({ id }))
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
        const fetchInventory = async () => {
            const fetchedInventory = await currentStoreData?.inventory;
            const fetchedInventoryItems = await fetchedInventory?.items.toArray()
            const fetchedInventoryUpdatedAt = fetchedInventory?.createdAt;
            setInventoryUpdatedAt(fetchedInventoryUpdatedAt ?? '');
            setInventory(fetchedInventoryItems);
        }

        fetchInventory();
    }, [currentStoreData])

    useEffect(() => {
        dispatch(getSingleStoreData(id ?? ''));
    }, [id])

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
                    {inventory && 
                        <Box flex='1'>
                            <Typography>Store Inventory as of {relativeUpdatedAt}</Typography>
                        </Box>
                    }
                    <Box flex='1' display='flex' justifyContent='flex-end' flexDirection='row'>
                        <Button onClick={startAddingInventory}><Refresh />Update Inventory</Button>
                        {userIsModerator && <Button onClick={startDeletingStore}>Delete Store</Button>}
                    </Box>
                </Box>
                {inventory && 
                    <Box display='flex' flexDirection='row'>
                        {inventory?.map((inv) => {
                            return (
                                <InventoryItem imageKey={inv?.imageKey} key={inv?.id} itemId={inv?.id ?? ''}/>
                            );
                        })}
                    </Box>
                }
            </Box>
        </Box>
    )
}

interface InventoryItemProps{
    imageKey: string | undefined
    addToOrder?: (id: string) => void
    itemId: string
}

export const InventoryItem = (props: InventoryItemProps) => {
    const { imageKey, addToOrder, itemId } = props;
    const dispatch = useAppDispatch();
    const [url, setUrl] = useState('');
    const cartItems = useAppSelector(selectCartItems);
    const itemsInCart = cartItems.find((item) => item.itemId === itemId);
    const itemCount = itemsInCart ? itemsInCart.count : 0;

    useEffect(() => {
        if (imageKey) {
            const getUrl = async () => {
                const url = await Storage.get(imageKey);
                setUrl(url);
            }

            getUrl();
        }
    })

    const addItemToCart = () => {
        if (addToOrder) {
            addToOrder(itemId);
        }
    }

    const addItem = () => {
        dispatch(updateItem({itemId, itemCount: itemCount + 1}));
    }

    const subtractItem = () => {
        dispatch(updateItem({itemId, itemCount: itemCount - 1}));
    }

    return (
        <Box border='2px solid rgba(246,236,54,255)' borderRadius='1rem' padding='2rem' margin='2rem' flex='1' minWidth='200px'>
            <img src={url} alt="" width='100%' height='100%'/>
            {addToOrder && itemCount < 1 && 
                <Button onClick={addItemToCart}>Request a cup</Button>
            }
            {addToOrder && itemCount > 0 &&
                <Box display='flex' flexDirection='row'>
                    <Button onClick={addItem}><RemoveCircleOutline /></Button>
                    <Typography paddingLeft='1rem' paddingRight='1rem'>{itemCount}</Typography>
                    <Button onClick={subtractItem}><AddCircleOutline /></Button>
                </Box>
            }
        </Box>
    )
}

export default StoreData;
