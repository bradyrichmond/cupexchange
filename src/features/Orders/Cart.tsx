import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Theme, Typography } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CartItem, emptyCart, removeCartItem, selectCartItems, updateItem } from './CartSlice';
import { DataStore, Storage } from 'aws-amplify';
import { useLegoData } from '../../hooks/legoHooks';
import { Counter } from '../Stores/StoreData';
import { selectCurrentTrip } from '../Trips/TripsSlice';
import { createOrderAction } from './OrderSlice';
import { useNavigate } from 'react-router';
import { selectUserData } from '../User/UserSlice';
import { User } from '../../models';
import { getUserById } from '../../utils/base';
import { ResponsiveContext } from '../Home';

const useMobileStyles = makeStyles((theme: Theme) => createStyles({
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '2rem'
    },
    mainContainer: {
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column'
    },
    mainCard: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    totalContainer: {
        paddingTop: '2rem'
    },
    cartActions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
    },
    cartItem: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
}));

const useStyles = makeStyles((theme: Theme) => createStyles({
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '2rem'
    },
    mainContainer: {
        padding: '2rem',
        display: 'flex',
        flexDirection: 'row'
    },
    mainCard: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    totalContainer: {
        paddingLeft: '3rem'
    },
    cartActions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
    },
    cartItem: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
}));

const Cart = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const cartItemList = useAppSelector(selectCartItems);
    const tripData = useAppSelector(selectCurrentTrip);
    const perCup = parseFloat(tripData?.cupPrice ?? '0');
    const cupCount = cartItemList.reduce((prev, curr) => prev + curr.count, 0);
    const subtotal = cupCount * perCup;
    const shippingUnits = Math.ceil(cupCount / 3);
    const shippingCost = parseFloat(tripData?.shippingPrice ?? '') * shippingUnits;
    const total = parseFloat(shippingCost.toString()) + subtotal;
    const currentUser = useAppSelector(selectUserData);
    const styles = useStyles();
    const mobileStyles = useMobileStyles();
    
    const submitOrder = async () => {
        const userData = await DataStore.query(User, currentUser?.id ?? '');
        const shipper = await getUserById(tripData?.tripShipperId ?? '');
        if (userData) {
            await dispatch(createOrderAction({ orderInput: { tracking: [], numberOfCups: cupCount, orderBuyerId: currentUser?.id ?? '', orderShipperId: shipper?.id ?? '', orderTripId: tripData?.id ?? '', total }, orderItems: cartItemList }));
            dispatch(emptyCart({}));
            navigate('/orders');
        }
    }

    const cancelOrder = async () => {
        dispatch(emptyCart({}));
        navigate('/trips');
    }

    return (
        <ResponsiveContext.Consumer>
            {({
                isDesktopOrLaptop,
                isBigScreen,
                isTabletOrMobile,
                isPortrait,
                isRetina
            }) => {
                    const classes = isTabletOrMobile ? mobileStyles : styles;

                    return (
                        <Box>
                            <Box className={classes.titleContainer}>
                                <Typography variant='h1'>Cart</Typography>
                            </Box>
                            <Box className={classes.mainContainer}>
                                <Box flex='1'>
                                    <Card className={classes.mainCard}>
                                        <CardContent>
                                            {cartItemList.length > 0 ?
                                                cartItemList.map((item) => {
                                                    return (
                                                        <Item cartItem={item} isTabletOrMobile={isTabletOrMobile}/>
                                                    )
                                                })
                                                :
                                                <Typography variant='h2'>No items in cart</Typography>
                                            }
                                        </CardContent>
                                    </Card>
                                </Box>
                                <Box className={classes.totalContainer}>
                                    <Card>
                                        <CardContent>
                                            <CardContentLineItem label='Subtotal' value={subtotal.toString()} />
                                            <CardContentLineItem label='Shipping' value={Number.isNaN(shippingCost) ? '0' : shippingCost.toString()} />
                                            <CardContentLineItem label='Total' value={Number.isNaN(total) ? '0' : total.toString()} />
                                        </CardContent>
                                        <Box className={classes.cartActions}>
                                            <Box><Button variant='contained' color='secondary' onClick={cancelOrder}>Cancel Order</Button></Box>
                                            <Box paddingLeft='1rem'><Button variant='contained' onClick={submitOrder}>Submit Order</Button></Box>
                                        </Box>
                                    </Card>
                                </Box>
                            </Box>
                        </Box>
                    )
                }
            }
        </ResponsiveContext.Consumer>
    )
}

interface CardContentLineItemProps {
    label: string
    value: string
}

const CardContentLineItem = (props: CardContentLineItemProps) => {
    const { label, value } = props;

    return (
        <Box display='flex' flexDirection='row'>
            <Typography variant='h3'>{label}:</Typography>
            <Box flex='1' display='flex' justifyContent='flex-end'>
                <Typography variant='h3'>${value}</Typography>
            </Box>
        </Box>
    )
}

interface ItemProps {
    cartItem: CartItem
    isTabletOrMobile: boolean
}

const Item = (props: ItemProps) => {
    const { cartItem, isTabletOrMobile } = props;
    const [url, setUrl] = useState('');
    const dispatch = useAppDispatch();
    const styles = useStyles();
    const mobileStyles = useMobileStyles();
    const classes = isTabletOrMobile ? mobileStyles : styles;

    const legoData = useLegoData(cartItem.itemId);

    useEffect(() => {
        if (legoData?.imageKey) {
            const getUrl = async () => {
                const url = await Storage.get(legoData.imageKey);
                setUrl(url);
            }

            getUrl();
        }
    }, [legoData?.imageKey])

    const addItem = () => {
        dispatch(updateItem({itemId: cartItem.itemId, itemCount: cartItem.count + 1}));
    }

    const subtractItem = () => {
        if (cartItem.count === 1) {
            dispatch(removeCartItem(cartItem.itemId));
        }

        dispatch(updateItem({itemId: cartItem.itemId, itemCount: cartItem.count - 1}));
    }

    return (
        <Box >
            <Box><img src={url} alt="" width='200px' /></Box>
            <Box className={classes.cartItem}>
                <Counter itemCount={cartItem.count} addAction={addItem} minusAction={subtractItem} />
            </Box>
        </Box>
    )
}

export default Cart;
