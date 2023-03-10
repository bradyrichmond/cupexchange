import React, { useEffect, useState } from 'react';
import { Card, Theme, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DataStore } from 'aws-amplify';
import { format } from 'date-fns';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { OrderItem } from '../../models';
import { selectUserData, UserType } from '../User/UserSlice';
import { getMyOrders, OrderType, selectIncomingOrders, selectOutgoingOrders } from './OrderSlice';
import { createStyles, makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { ResponsiveContext } from '../Home';

const Orders = () => {
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(selectUserData);
    const incomingOrders = useAppSelector(selectIncomingOrders);
    const outgoingOrders = useAppSelector(selectOutgoingOrders);

    useEffect(() => {
        dispatch(getMyOrders(currentUser?.id ?? ''));
    }, [dispatch, currentUser?.id])

    return (
        <ResponsiveContext.Consumer>
            {({
                isDesktopOrLaptop,
                isBigScreen,
                isTabletOrMobile,
                isPortrait,
                isRetina
            }) => {
                return (
                    <Box padding='2rem' maxWidth='100%'>
                        <Box>
                            <Box display='flex' justifyContent='center' alignItems='center' paddingBottom='2rem'><Typography variant={isTabletOrMobile ? 'h2' : 'h1'}>Outgoing Orders</Typography></Box>
                            <Card sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                                    {outgoingOrders.length > 0 ?
                                        outgoingOrders.map((order) => {
                                            if (order) {
                                                return <OrderItems orderData={order} isTabletOrMobile={isTabletOrMobile} />;
                                            }
                                            return undefined;
                                        })
                                        :
                                        <Typography variant='h3'>No outgoing orders</Typography>
                                    }
                            </Card>
                        </Box>
                        <Box>
                            <Box display='flex' justifyContent='center' alignItems='center' paddingBottom='2rem' paddingTop='2rem'><Typography variant={isTabletOrMobile ? 'h2' : 'h1'}>Incoming Orders</Typography></Box>
                            <Box>
                            <Card sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                                {incomingOrders.length > 0 ?
                                    incomingOrders.map((order) => {
                                        if (order) {
                                            return <OrderItems orderData={order} isTabletOrMobile={isTabletOrMobile} />;
                                        }
                                        return undefined;
                                    })
                                    :
                                    <Typography variant='h3'>No incoming orders</Typography>
                                }
                            </Card>
                            </Box>
                        </Box>
                    </Box>
                )
            }}
        </ResponsiveContext.Consumer>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    orderItemContainer: {
        border: '2px solid rgba(246,236,54,255)',
        borderRadius: '1rem',
        marginBottom: '1rem'
    },
    orderItemDataContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: '2rem',
        background: 'rgba(232, 236, 241, 255)'
    },
    orderItemData: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: '2rem',
        justifyContent: 'center'
    },
    flexOne: {
        flex: '1'
    }
}));

const useMobileStyles = makeStyles((theme: Theme) => createStyles({
    orderItemContainer: {
        border: '2px solid rgba(246,236,54,255)',
        borderRadius: '1rem',
        paddingBottom: '1rem',
        overflow: 'hidden'
    },
    orderItemDataContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        background: 'rgba(232, 236, 241, 255)'
    },
    orderItemData: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '2rem',
        justifyContent: 'center'
    },
    flexOne: {
        flex: '1'
    }
}));

let initialUser: UserType | undefined;
let initialOrder: (OrderItem | undefined)[];

interface OrderItemsProps {
    orderData: OrderType,
    isTabletOrMobile: boolean
}

const OrderItems = (props: OrderItemsProps) => {
    const { orderData, isTabletOrMobile } = props;
    const [buyer, setBuyer] = useState(initialUser);
    const [orders, setOrders] = useState(initialOrder);
    const { createdAt } = orderData;
    const currentUser = useAppSelector(selectUserData);
    const orderDate = format(Date.parse(createdAt ?? ''), "MMMM d, y");
    const mobileStyles = useMobileStyles();
    const styles = useStyles();
    const classes = isTabletOrMobile ? mobileStyles : styles;

    useEffect(() => {
        const getOrderData = async () => {
            const buyerData = await orderData.buyer;
            const orderId = orderData.id;
            const fetchedOrderData = await DataStore.query(OrderItem, (oi) => oi.orderOrdersId.eq(orderId))
            setBuyer(buyerData);
            setOrders(fetchedOrderData);
        }

        getOrderData();
    }, [orderData.buyer, orderData.id])

    return (
        <Box className={classes.orderItemContainer}>
            <Box className={classes.orderItemDataContainer}>
                <Box className={classes.orderItemData}>
                    <Typography>Order Placed</Typography>
                    <Typography>{orderDate}</Typography>
                </Box>
                <Box className={classes.orderItemData}>
                    <Typography>Total</Typography>
                    <Typography>${orderData.total}</Typography>
                </Box>
                <Box className={clsx(classes.orderItemData, classes.flexOne)}>
                    <Typography>Ship to</Typography>
                    {`${buyer?.first_name} ${buyer?.last_name}`}
                    <Typography>{currentUser?.id === orderData.orderBuyerId ? 'You' : `${buyer?.first_name} ${buyer?.last_name}`}</Typography>
                </Box>
                <Box className={classes.orderItemData}>
                    <Typography>Order Id: {orderData.id}</Typography>
                    <Box display='flex' flexDirection='row' marginTop='1rem'>
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