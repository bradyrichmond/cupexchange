import React, { ChangeEvent, useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUserData } from '../User/UserSlice';

const CreateStoreForm = () => {
    const { register, handleSubmit } = useForm();
    const [store, setStore] = useState('None');
    const [orderExpiration, setOrderExpiration] = useState('');
    const userData = useAppSelector(selectUserData);
    const dispatch = useAppDispatch();

    const handleStoreChange = (e:ChangeEvent<{ value: string }>) => {
        setStore(e.target.value);
    }

    return (
        <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
            <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom='2rem'>
                    Create Trip
                </Typography>
                <form onSubmit={handleSubmit(() => {})}>
                    <Typography>Shipper Name: {userData?.first_name} {userData?.last_name}</Typography>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                        <Select
                        onChange={() => {}}
                        label="Store"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <DateTimePicker
                        label="Taking orders until"
                        renderInput={(params) => <TextField {...params} />}
                        value={orderExpiration}
                        onChange={(newValue) => {
                            setOrderExpiration(newValue ?? '');
                        }}
                    />
                    <TextField label="Cup Price" variant="standard" {...register('cupPrice', { required: true, minLength: 2 })} />
                    <TextField label="Shipping price per 3 cups" variant="standard" {...register('shippingPrice', { required: true, minLength: 2 })} />
                    <Button type='submit'>Create Trip</Button>
                </form>
            </Box>
        </Box>
    )
}

export default CreateStoreForm;
