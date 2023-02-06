import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
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
    
    const submitOrder = async () => {
        const userData = await DataStore.query(User, currentUser?.id ?? '');
        const shipper = await getUserById(tripData?.tripShipperId ?? '');
        if (userData) {
            await dispatch(createOrderAction({ orderInput: { tracking: [], numberOfCups: cupCount, orderBuyerId: currentUser?.id ?? '', orderShipperId: shipper?.id ?? '', orderTripId: tripData?.id ?? '', total }, orderItems: cartItemList }));
            await dispatch(emptyCart({}));
            navigate('/orders');
        }
    }

    const cancelOrder = async () => {
        await dispatch(emptyCart({}));
        navigate('/trips');
    }

    return (
        <Box>
            <Box display='flex' justifyContent='center' alignItems='center' paddingBottom='2rem'>
                <Typography variant='h1'>Cart</Typography>
            </Box>
            <Box padding='2rem' display='flex' flexDirection='row'>
                <Box flex='1'>
                    <Card sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CardContent>
                            {cartItemList.length > 0 ?
                                cartItemList.map((item) => {
                                    return (
                                        <Item cartItem={item}/>
                                    )
                                })
                                :
                                <Typography variant='h2'>No items in cart</Typography>
                            }
                        </CardContent>
                    </Card>
                </Box>
                <Box paddingLeft='3rem'>
                    <Card>
                        <CardContent>
                            <Box display='flex' flexDirection='row'>
                                <Typography variant='h3'>Subtotal:</Typography>
                                <Box flex='1' display='flex' justifyContent='flex-end'>
                                    <Typography variant='h3'>${subtotal}</Typography>
                                </Box>
                            </Box>
                            <Box display='flex' flexDirection='row'>
                                <Typography variant='h3'>Shipping:</Typography>
                                <Box flex='1' display='flex' justifyContent='flex-end'>
                                    <Typography variant='h3'>${Number.isNaN(shippingCost) ? '0' : shippingCost}</Typography>
                                </Box>
                            </Box>
                            <Box display='flex' flexDirection='row'>
                                <Typography variant='h3'>Total:</Typography>
                                <Box flex='1' display='flex' justifyContent='flex-end'>
                                    <Typography variant='h3'>${Number.isNaN(total) ? '0' : total}</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' padding='1rem'>
                            <Box><Button variant='contained' color='secondary' onClick={cancelOrder}>Cancel Order</Button></Box>
                            <Box paddingLeft='1rem'><Button variant='contained' onClick={submitOrder}>Submit Order</Button></Box>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </Box>
    )
}

const Item = (props: { cartItem: CartItem }) => {
    const { cartItem } = props;
    const [url, setUrl] = useState('');
    const dispatch = useAppDispatch();

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
        <Box border='2px solid rgba(246,236,54,255)' borderRadius='1rem' padding='2rem' margin='2rem' display='flex' flexDirection='row'>
            <Box><img src={url} alt="" width='200px' /></Box>
            <Box display='flex' flex='1' alignItems='center' justifyContent='flex-end'>
                <Counter itemCount={cartItem.count} addAction={addItem} minusAction={subtractItem} />
            </Box>
        </Box>
    )
}

export default Cart;
