import React from 'react';
import { Box } from '@mui/material';
import { useAppDispatch } from '../../hooks';
import { getStoreData } from './StoresSlice';

const Stores = () => {
    const dispatch = useAppDispatch();
    dispatch(getStoreData());

    return (
        <Box>

        </Box>
    )
}

export default Stores;