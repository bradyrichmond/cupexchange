import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { API } from 'aws-amplify';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Order, OrderItem, Trip, User } from '../../models';
import { selectUserData } from '../User/UserSlice';
import { getMyOrders, selectIncomingOrders, selectOutgoingOrders } from './OrderSlice';

const Orders = () => {
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(selectUserData);
    const incomingOrders = useAppSelector(selectIncomingOrders);
    const outgoingOrders = useAppSelector(selectOutgoingOrders);

    useEffect(() => {
        dispatch(getMyOrders(currentUser?.id ?? ''));
    }, [])

    return (
        <Box display='flex' flexDirection='column' padding='2rem'>
            <Box>
                <Typography fontSize='3rem'>Outgoing Orders</Typography>
                <Box>
                    {
                        outgoingOrders.map((order) => {
                            if (order) {
                                return <OrderItems orderData={order} />;
                            }
                        })
                    }
                </Box>
            </Box>
            <Box>
                <Typography fontSize='3rem'>Incoming Orders</Typography>
                <Box>
                    {
                        incomingOrders.map((order) => {
                            if (order) {
                                return <OrderItems orderData={order} />;
                            }
                        })
                    }
                </Box>
            </Box>
        </Box>
    )
}

let initialUser: User | undefined;
let initialTrip: Trip | undefined;
let initialOrder: (OrderItem | undefined)[];

const OrderItems = (props: { orderData: Order }) => {
    const { orderData } = props;
    const [buyer, setBuyer] = useState(initialUser);
    const [shipper, setShipper] = useState(initialUser);
    const [trip, setTrip] = useState(initialTrip);
    const [orders, setOrders] = useState(initialOrder);
    const { createdAt, tracking } = orderData;
    const currentUser = useAppSelector(selectUserData);
    const orderDate = format(Date.parse(createdAt ?? ''), "MMMM d, y");

    useEffect(() => {
        const getOrderData = async () => {
            const buyerData = await orderData.buyer;
            const shipperData = await orderData.shipper;
            const tripData = await orderData.trip;
            const fetchedOrderData = await orderData.orders.toArray();
            setBuyer(buyerData);
            setShipper(shipperData);
            setTrip(tripData);
            setOrders(fetchedOrderData);
        }

        getOrderData();
    }, [])

    return (
        <Box border='2px solid rgba(246,236,54,255)' borderRadius='1rem' marginBottom='1rem'>
            <Box display='flex' flexDirection='row' padding='2rem' bgcolor='rgba(232, 236, 241, 255)'>
                <Box display='flex' flexDirection='column' paddingRight='2rem' justifyContent='center'>
                    <Typography>Order Placed</Typography>
                    <Typography>{orderDate}</Typography>
                </Box>
                <Box display='flex' flexDirection='column' paddingRight='2rem' justifyContent='center'>
                    <Typography>Total</Typography>
                    <Typography>${orderData.total}</Typography>
                </Box>
                <Box display='flex' flexDirection='column' flex='1' paddingRight='2rem' justifyContent='center'>
                    <Typography>Ship to</Typography>
                    buyer {JSON.stringify(buyer)}
                    <Typography>{currentUser?.id === orderData.orderBuyerId ? 'You' : `${buyer?.first_name} ${buyer?.last_name}`}</Typography>
                </Box>
                <Box display='flex' flexDirection='column' paddingRight='2rem' justifyContent='center'>
                    <Typography>Order Id: {orderData.id}</Typography>
                    <Box display='flex' flexDirection='row'>
                        <Typography borderRight='2px solid rgba(246,236,54,255)' paddingRight='1rem'>View Order Details</Typography>
                        <Typography paddingLeft='1rem'>View Invoice</Typography>
                    </Box>
                </Box>
            </Box>
            <Box padding='2rem' display='flex' flexDirection='column'>
                {orders &&
                    orders.map((orderItem) => {
                        return (orderItem?.id)
                    })
                }
            </Box>
        </Box>
    )
}

export default Orders;