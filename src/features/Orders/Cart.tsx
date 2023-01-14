import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CartItem, selectCartItems } from './CartSlice';
import { Storage } from 'aws-amplify';
import { useLegoData } from '../../hooks/legoHooks';

const Cart = () => {
    const cartItemList = useAppSelector(selectCartItems);
    return (
        <Box>
            {
                cartItemList.map((item) => {
                    return (
                        <Item cartItem={item}/>
                    )
                })
            }
        </Box>
    )
}

const Item = (props: { cartItem: CartItem }) => {
    const { cartItem } = props;
    const [url, setUrl] = useState('')

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

    return (
        <Box border='2px solid rgba(246,236,54,255)' borderRadius='1rem' padding='2rem' margin='2rem'>
            <img src={url} alt="" width='200px' />
        </Box>
    )
}

export default Cart;
