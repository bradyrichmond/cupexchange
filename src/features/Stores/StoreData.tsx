import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSingleStoreData, selectCurrentStoreData } from './StoresSlice';

const StoreData = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const currentStoreData = useAppSelector(selectCurrentStoreData);

    useEffect(() => {
        dispatch(getSingleStoreData(id ?? ''));
    }, [])

    return (
        <Box display='flex' flexDirection='column'>
            <Box>
                <Button ><Add />Add Inventory</Button>
            </Box>
            <Box>
                <Typography>{currentStoreData?.name}</Typography>
                <Typography>{`${currentStoreData?.city}, ${currentStoreData?.district}`}</Typography>
            </Box>
            <Box flex={1}>
                <Typography>Store Inventory as of Date</Typography>
            </Box>
        </Box>
    )
}

export default StoreData;
