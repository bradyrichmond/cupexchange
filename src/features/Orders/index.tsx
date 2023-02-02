import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { API, DataStore } from 'aws-amplify';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Lego, Order, OrderItem, Trip, User } from '../../models';
import { TripType } from '../Trips/TripsSlice';
import { selectUserData, UserType } from '../User/UserSlice';
import { getMyOrders, OrderType, selectIncomingOrders, selectOutgoingOrders } from './OrderSlice';

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
                <Box display='flex' justifyContent='center' alignItems='center' paddingBottom='2rem'><Typography variant='h1'>Outgoing Orders</Typography></Box>
                    <Card sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                            {outgoingOrders.length > 0 ?
                                outgoingOrders.map((order) => {
                                    if (order) {
                                        return <OrderItems orderData={order} />;
                                    }
                                })
                                :
                                <Typography variant='h2'>No outgoing orders</Typography>
                            }
                    </Card>
            </Box>
            <Box>
                <Box display='flex' justifyContent='center' alignItems='center' paddingBottom='2rem' paddingTop='2rem'><Typography variant='h1'>Incoming Orders</Typography></Box>
                <Box>
                    <Card sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                        {incomingOrders.length > 0 ?
                            incomingOrders.map((order) => {
                                if (order) {
                                    return <OrderItems orderData={order} />;
                                }
                            })
                            :
                            <Typography variant='h2'>No incoming orders</Typography>
                        }
                    </Card>
                </Box>
            </Box>
        </Box>
    )
}

let initialUser: UserType | undefined;
let initialTrip: TripType | undefined;
let initialOrder: (OrderItem | undefined)[];

const OrderItems = (props: { orderData: OrderType }) => {
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
            const orderId = orderData.id;
            const fetchedOrderData = await DataStore.query(OrderItem, (oi) => oi.orderOrdersId.eq(orderId))
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
                    {`${buyer?.first_name} ${buyer?.last_name}`}
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