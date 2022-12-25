import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks';
import { createStore, getStoreData } from './StoresSlice';

const CreateStoreForm = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useAppDispatch();

    const handleCreateStore = async (data: any) => {
        const { storeName, storeCity, storeState } = data;
        await dispatch(createStore({ name: storeName, city: storeCity, district: storeState }));
        await dispatch(getStoreData());
    }

    return (
        <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
            <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom='2rem'>
                    Create Store
                </Typography>
                <form onSubmit={handleSubmit(handleCreateStore)}>
                    <TextField id="standard-basic" label="Store Name" variant="standard" {...register('storeName', { required: true, minLength: 2 })} />
                    <TextField id="standard-basic" label="Store City" variant="standard" {...register('storeCity', { required: true, minLength: 2 })} />
                    <TextField id="standard-basic" label="Store State" variant="standard" {...register('storeState', { required: true, minLength: 2 })} />
                    <Button type='submit'>Create Store</Button>
                </form>
            </Box>
        </Box>
    )
}

export default CreateStoreForm;