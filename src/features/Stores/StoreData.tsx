import React, { useEffect, useState } from 'react';
import { Badge, Box, Button, Modal, Paper, Typography } from '@mui/material';
import { AddCircleOutline, Refresh, RemoveCircleOutline } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router';
import { Storage } from '@aws-amplify/storage';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteStoreMutation, getSingleStoreData, selectCurrentStoreData } from './StoresSlice';
import FileUpload from '../../utils/FileUpload';
import { createStoreInventory, getStoreInventory, selectCurrentInventory } from './InventorySlice';
import { formatRelative, parseISO } from 'date-fns';
import { getUserData, selectFbUsername, selectUserCognitoGroups, selectUserData } from '../User/UserSlice';
import DeleteStoreModal from './DeleteStoreModal';
import { removeCartItem, selectCartItems, updateItem } from '../Orders/CartSlice';
import CommentsContent from '../Comments';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { CommentType } from '../Comments/CommentSlice';

const StoreData = () => {
    const { id } = useParams();
    const [isAddingInventory, setIsAddingInventory] = useState(false);
    const [isDeletingStore, setIsDeletingStore] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const fbUsername = useAppSelector(selectFbUsername);
    const currentUser = useAppSelector(selectUserData);
    const currentStoreData = useAppSelector(selectCurrentStoreData);
    const userGroups = useAppSelector(selectUserCognitoGroups);
    const userIsModerator = userGroups.includes('moderators');
    const inventoryUpdatedAt = currentStoreData?.updatedAt;
    const relativeUpdatedAt = inventoryUpdatedAt ? formatRelative(parseISO(inventoryUpdatedAt), Date.now()) : 'loading...';
    const inventory = useAppSelector(selectCurrentInventory);

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
            dispatch(deleteStoreMutation(id))
        }
        navigate('/stores');
    }

    const stopDeletingStore = () => {
        setIsDeletingStore(false);
    }

    const handleFileUploadComplete = async (results: { imageKey: string | undefined, labels: any[] | undefined }[]) => {
        stopAddingInventory();
        if (id) {
            await dispatch(createStoreInventory({ lego: results, storeId: id, userId: currentUser?.id ?? '' }));
            await dispatch(getSingleStoreData(id));
        }
    }

    useEffect(() => {
        const fetchInventory = async () => {
            if (currentStoreData) {
                dispatch(getStoreInventory( currentStoreData.storeInventoryId ?? ''));
            }
        }

        fetchInventory();
    }, [dispatch, currentStoreData])

    useEffect(() => {
        dispatch(getUserData(fbUsername));
    }, [dispatch, fbUsername])

    useEffect(() => {
        dispatch(getSingleStoreData(id ?? ''));
    }, [dispatch, id])

    return (
        <Box display='flex' flexDirection='column' padding='2rem' height='100%' flex='1'>
            <Modal
                open={isAddingInventory}
                onClose={stopDeletingStore}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box height="100%" width="100%" display='flex' justifyContent='center' alignItems='center' padding='2rem'>
                    <FileUpload onComplete={handleFileUploadComplete} onClose={stopAddingInventory}/>
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
            <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                <Typography fontSize='3rem' display='inline-block'>{currentStoreData?.name}</Typography>
                <Typography fontSize='2rem' paddingLeft='1rem' display='inline-block'> - {`${currentStoreData?.city}, ${currentStoreData?.district}`}</Typography>
            </Box>
            <Box flex='1' paddingTop='2rem' borderTop='2px solid rgba(0,0,0,255)' display='flex' flexDirection='column'>
                <Box paddingBottom='2rem' display='flex' flexDirection='row'>
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
                    <Box display='flex' flexDirection='row' overflow='auto' flexWrap='wrap'>
                        {inventory?.map((inv) => {
                            return (
                                <InventoryItem imageKey={inv?.imageKey} key={inv?.id} itemId={inv?.id ?? ''} comments={inv?.comments} itemAddedById={inv?.itemAddedById ?? ''}/>
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
    comments?: CommentType[]
    itemAddedById: string
}

export const InventoryItem = (props: InventoryItemProps) => {
    const { imageKey, addToOrder, itemId, comments, itemAddedById } = props;
    const dispatch = useAppDispatch();
    const [url, setUrl] = useState('');
    const [isViewingComments, setIsViewingComments] = useState(false);
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
    }, [imageKey])

    const addItemToCart = () => {
        if (addToOrder) {
            addToOrder(itemId);
        }
    }

    const addItem = () => {
        dispatch(updateItem({itemId, itemCount: itemCount + 1}));
    }

    const subtractItem = () => {
        if (itemCount === 1) {
            dispatch(removeCartItem(itemId));
        }

        dispatch(updateItem({itemId, itemCount: itemCount - 1}));
    }

    const stopViewingComments = () => {
        setIsViewingComments(false);
    }

    const startViewingComments = () => {
        setIsViewingComments(true);
    }

    return (
        <Box border='2px solid rgba(0,0,0,255)' borderRadius='1rem' padding='2rem' minWidth='200px' maxWidth='600px' display='flex' flexDirection='column'>
            <Modal
                open={isViewingComments}
                onClose={stopViewingComments}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box height="100%" width="100%" display='flex' justifyContent='center' alignItems='center' borderRadius='1rem' padding='2rem'>
                    <CommentsContent comments={comments} parent={itemId} itemAddedById={itemAddedById} onClose={stopViewingComments}/>
                </Box>
            </Modal>
            <Paper style={{ backgroundImage: `url(${url})`, backgroundPosition: 'center', backgroundSize: 'contain', width: '400px', height: '400px' }} />
            <Box paddingTop='1rem'>
                {addToOrder && itemCount < 1 && 
                    <Button onClick={addItemToCart}>Request a cup</Button>
                }
                {addToOrder && itemCount > 0 &&
                    <Counter itemCount={itemCount} addAction={addItem} minusAction={subtractItem}/>
                }
                <Box onClick={startViewingComments} data-testid='show-messages'>
                    <Badge badgeContent={comments?.length ?? ''} color='primary'>
                        <ChatBubbleOutlineIcon />
                    </Badge>
                </Box>
            </Box>
        </Box>
    )
}

export const Counter = (props: { minusAction: () => void, itemCount: number, addAction: () => void }) => {
    const { minusAction, itemCount, addAction } = props;

    return (
        <Box display='flex' flexDirection='row'>
            <Button onClick={minusAction}><RemoveCircleOutline /></Button>
            <Typography paddingLeft='1rem' paddingRight='1rem'>{itemCount}</Typography>
            <Button onClick={addAction}><AddCircleOutline /></Button>
        </Box>
    )
}

export default StoreData;
