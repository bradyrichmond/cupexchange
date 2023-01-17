import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
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
                            return <OrderItem orderId={order?.id ?? ''} orderDateTime={Date.parse(order?.createdAt ?? '')} total={order?.total ?? 0}/>;
                        })
                    }
                </Box>
            </Box>
            <Box>
                <Typography fontSize='3rem'>Incoming Orders</Typography>
                <Box>
                    {
                        incomingOrders.map((order) => {
                            return <OrderItem orderId={order?.id ?? ''} orderDateTime={Date.parse(order?.createdAt ?? '')} total={order?.total ?? 0}/>
                        })
                    }
                </Box>
            </Box>
        </Box>
    )
}

interface OrderItemType {
    orderId: string
    total: number
    orderDateTime: number
}

const OrderItem = (props: OrderItemType) => {
    const { total, orderDateTime, orderId } = props;
    const orderDate = format(orderDateTime, "MMMM d, y")

    return (
        <Box padding='2rem' border='2px solid rgba(246,236,54,255)' borderRadius='1rem' marginBottom='1rem'>
            <Box display='flex' flexDirection='row'>
                <Box display='flex' flexDirection='column' flex='1' justifyContent='center'>
                    <Typography>Order Placed</Typography>
                    <Typography>{orderDate}</Typography>
                </Box>
                <Box display='flex' flexDirection='column' flex='1' justifyContent='center'>
                    <Typography>Total</Typography>
                    <Typography>${total}</Typography>
                </Box>
                <Box display='flex' flexDirection='column' flex='3' justifyContent='center'>
                    <Typography>Ship to</Typography>
                    <Typography>Test Person</Typography>
                </Box>
                <Box display='flex' flexDirection='column' flex='1' justifyContent='center'>
                    <Typography>Order Id: {orderId}</Typography>
                    <Box display='flex' flexDirection='row'>
                        <Typography>View Order Details</Typography>
                        <Typography>View Invoice</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Orders;