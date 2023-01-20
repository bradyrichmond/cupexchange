import React, { ChangeEvent, useEffect, useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUserData } from '../User/UserSlice';
import { selectStoreData, getStoreData } from '../Stores/StoresSlice';
import { createTripMutation, getTrips } from './TripsSlice';
import { LocalizationProvider } from '@mui/x-date-pickers';

interface CreateTripFormProps {
    close: () => void
}

const CreateTripForm = ({ close }: CreateTripFormProps) => {
    const { register, handleSubmit } = useForm();
    const [store, setStore] = useState('None');
    const [orderExpiration, setOrderExpiration] = useState('');
    const userData = useAppSelector(selectUserData);
    const storeData = useAppSelector(selectStoreData);
    const dispatch = useAppDispatch();
    const userFullName = `${userData?.first_name} ${userData?.last_name}`

    useEffect(() => {
        dispatch(getStoreData());
    }, [])

    const handleStoreChange = (e:SelectChangeEvent<string>) => {
        setStore(e.target.value);
    }

    const handleFormSubmit = async (data: any) => {
        const { cupPrice, shippingPrice, cupLimit } = data;
        const parsedOrderExpiration = Date.parse(orderExpiration);
        await dispatch(createTripMutation({ tripShipperId: userData?.id ?? '', cupPrice, shippingPrice, tripStoreId: store, orderExpiration: parsedOrderExpiration, maximumCups: cupLimit, store: store ?? '', shipper: userData }));
        await dispatch(getTrips(0));
        close();
    }

    return (
        <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
            <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom='2rem'>
                    Create Trip
                </Typography>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Box display='flex' flexDirection='column'>
                        <Typography>Shipper Name: {userFullName}</Typography>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Store</InputLabel>
                            <Select
                            onChange={handleStoreChange}
                            label="Store"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {storeData?.map((store) => {
                                    return (<MenuItem value={store.id} key={store.id}>{store.name}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label="Taking orders until"
                                renderInput={(params) => <TextField {...params} />}
                                value={orderExpiration}
                                minutesStep={5}
                                onChange={(newValue) => {
                                    setOrderExpiration(newValue ?? '');
                                }}
                            />
                        </LocalizationProvider>
                        <TextField label="Cup Price" variant="standard" {...register('cupPrice', { required: true, minLength: 2 })} />
                        <TextField label="Shipping price per 3 cups" variant="standard" {...register('shippingPrice', { required: true, minLength: 1 })} />
                        <Box paddingTop='1rem'>
                            <InputLabel>Do you want to set a limit for the total number of cups you will fill? Leave blank for no limit.</InputLabel>
                            <TextField id="standard-basic" label="Cup Limit" variant="standard" {...register('cupLimit')} />
                        </Box>
                        <Button type='submit'>Create Trip</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}

export default CreateTripForm;
