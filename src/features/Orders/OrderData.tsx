import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { useParams } from 'react-router';
import { getOrderById, getReviewsByOrderId } from '../../utils/base';
import { Order, OrderItem, Review, User } from '../../models';
import { Button, Card, Modal, Paper, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { Storage } from 'aws-amplify';
import { useAppSelector } from '../../hooks';
import { selectUserData } from '../User/UserSlice';
import CreateReviewModal from '../Reviews';

let initialOrder: Order;
let initialOrderItems: OrderItem[];
let initialShipper: User;
let initialReviews: Review[];

const OrderData = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(initialOrder);
    const [orderItems, setOrderItems] = useState(initialOrderItems);
    const [shipper, setShipper] = useState(initialShipper);
    const [buyer, setBuyer] = useState(initialShipper);
    const [reviews, setReviews] = useState(initialReviews);

    useEffect(() => {
        const getOrderData = async () => {
            const orderData = await getOrderById(id ?? '');
            
            if (orderData) {
                const fetchedShipper = await orderData.shipper;
                const fetchedOrderItems = await orderData.orders.toArray();
                const fetchedReviews = await getReviewsByOrderId(id ?? '');
                const fetchedBuyer = await orderData.buyer;
                setOrderItems(fetchedOrderItems);
                setOrder(orderData);
                setReviews(fetchedReviews);
                setShipper(fetchedShipper);
                setBuyer(fetchedBuyer);
            }
        }

        getOrderData();
    }, [id])

    return (
        <Box display='flex' alignItems='center' margin='2rem' flexDirection='column' flex='1'>
            <Box width='100%'>
                <Card>
                    <Box display='flex' justifyContent='center' alignItems='center' paddingBottom='3rem'>
                        {shipper && order && <Typography variant='h2'>{`Order fulfilled by ${shipper.first_name} on ${format(parseISO(order.createdAt ?? ''), "MM/dd/yyyy")}`}</Typography>}
                    </Box>
                </Card>
            </Box>
            {orderItems && 
                <Box width='100%' marginTop='2rem'>
                    <Card>
                        <Box marginTop='2rem' padding='2rem'>
                            {orderItems.map((item: OrderItem) => {
                                return (
                                    <OrderDataItem item={item} key={item.id} />
                                )
                            })}
                        </Box>
                        <Box padding='2rem'>
                            <Typography variant='h3'>Order total: ${order.total}</Typography>
                        </Box>
                        <OrderDataActions reviews={reviews} shipperId={shipper.id} buyerId={buyer.id}/>
                    </Card>
                </Box>
            }
        </Box>
    )
}

interface OrderDataItemProps {
    item: OrderItem
}

const OrderDataItem = (props: OrderDataItemProps) => {
    const { item } = props;
    const [imageUrl, setImageUrl] = useState('');
    const [itemCount, setItemCount] = useState('');

    useEffect(() => {
        const load = async () => {
            const itemData = await item.item;
            const fetchedImageUrl = await Storage.get(itemData.imageKey);
            setImageUrl(fetchedImageUrl);
            setItemCount(item.count.toString());
        }
        
        load();
    }, [item])

    return (
        <Box marginBottom='1rem' display='flex' flexDirection='row' alignItems='center'>
            <Paper style={{height: '200px', width: '200px', backgroundImage: `url('${imageUrl}')`, backgroundSize: 'contain', marginRight: '2rem'}} />
            <Typography variant='h3'>{`${itemCount} cup(s)`}</Typography>
        </Box>
    )
}

interface OrderDataActionsProps {
    reviews: Review[]
    buyerId: string
    shipperId: string
}

let initialReview: string | undefined;

const OrderDataActions = (props: OrderDataActionsProps) => {
    const { reviews, buyerId, shipperId } = props;
    const [buyerReview, setBuyerReview] = useState(initialReview);
    const [shipperReview, setShipperReview] = useState(initialReview);
    const [creatingReview, setCreatingReview] = useState(false);
    const [reviewOf, setReviewOf] = useState('');
    const currentUserData = useAppSelector(selectUserData);
    
    useEffect(() => {
        const load = async () => {
            const fetchedBuyerReviewComment = await reviews.find(r => r.reviewReviewById === buyerId)?.comment;
            const fetchedShipperReviewComment = await reviews.find(r => r.reviewReviewById === shipperId)?.comment;
            const buyerReviewString = fetchedBuyerReviewComment?.comment;
            const shipperReviewString = fetchedShipperReviewComment?.comment;

            setBuyerReview(buyerReviewString);
            setShipperReview(shipperReviewString);
        }

        load();
    }, [reviews, buyerId, shipperId])

    const handleClose = () => {
        setCreatingReview(false);
    }

    const startCreatingReview = (reviewOfId: string) => {
        setReviewOf(reviewOfId);
        setCreatingReview(true);
    }
    
    return (
        <Box display='flex' flexDirection='row'>
            <Modal
                open={creatingReview}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width='100%' height='100%' display='flex' justifyContent='center' alignItems='center'>
                    <CreateReviewModal onClose={handleClose} reviewOfId={reviewOf}/>
                </Box>
            </Modal>
            <Box display='flex' flexDirection='column' padding='2rem'>
                {!shipperReview && currentUserData?.id !== shipperId &&<Button variant='contained' onClick={() => startCreatingReview(shipperId)}>Submit Shipper Review</Button>}
                {!buyerReview && currentUserData?.id !== buyerId && <Button variant='contained' onClick={() => startCreatingReview(buyerId)}>Submit Buyer Review</Button>}
            </Box>
        </Box>
    )
}

export default OrderData;