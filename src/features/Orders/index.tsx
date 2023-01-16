import { Typography } from '@mui/material';
import { Box } from '@mui/system';
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
            <Box borderBottom='2px solid rgba(246,236,54,255)' >
                <Typography fontSize='3rem'>Outgoing Orders</Typography>
                <Box>
                    {
                        outgoingOrders.map((order) => {
                            return (order?.id ?? 'error');
                        })
                    }
                </Box>
            </Box>
            <Box>
                <Typography fontSize='3rem'>Incoming Orders</Typography>
                <Box>
                    {
                        incomingOrders.map((order) => {
                            return (order?.id ?? 'error');
                        })
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default Orders;