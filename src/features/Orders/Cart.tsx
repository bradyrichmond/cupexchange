import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
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
        const shipper = await tripData?.shipper;
        if (userData) {
            await dispatch(createOrderAction({ orderInput: { tracking: [], numberOfCups: cupCount, orderBuyerId: currentUser?.id ?? '', orderShipperId: shipper?.id ?? '', orderTripId: tripData?.id ?? '', total }, orderItems: cartItemList,  buyer: userData, shipper: shipper, trip: tripData }));
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
            {
                cartItemList.map((item) => {
                    return (
                        <Item cartItem={item}/>
                    )
                })
            }
            <Box borderTop='2px solid rgba(246,236,54,255)' padding='2rem'>
                <Box display='flex' flexDirection='row'>
                    <Box flex='1'>Subtotal:</Box>
                    <Box flex='1'>${subtotal}</Box>
                </Box>
                <Box display='flex' flexDirection='row'>
                    <Box flex='1'>Shipping:</Box>
                    <Box flex='1'>${shippingCost}</Box>
                </Box>
                <Box display='flex' flexDirection='row'>
                    <Box flex='1'>Total:</Box>
                    <Box flex='1'>${total}</Box>
                </Box>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                <Box><Button onClick={submitOrder}>Submit Order</Button></Box>
                <Box><Button onClick={cancelOrder}>Cancel Order</Button></Box>
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
