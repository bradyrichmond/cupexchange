import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUserData } from '../User/UserSlice';
import { createStoreMutation, getStoreData } from './StoresSlice';
import { DISTRICTS } from '../../utils/constants';

interface CreateStoreFormProps {
    close: () => void
}

const CreateStoreForm = ({ close }: CreateStoreFormProps) => {
    const { register, handleSubmit } = useForm();
    const [district, setDistrict] = useState('None');
    const dispatch = useAppDispatch();
    const userData = useAppSelector(selectUserData);

    const handleDistrictChange = (e:SelectChangeEvent<string>) => {
        setDistrict(e.target.value);
    }

    const handleCreateStore = async (data: any) => {
        const { storeName, storeCity } = data;
        if (userData) {
            await dispatch(createStoreMutation({ name: storeName, city: storeCity, district, storeLastUpdateById: userData?.id ?? '', lastUpdateBy: userData }));
            await dispatch(getStoreData());
            close();
        }
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
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">State</InputLabel>
                        <Select
                        onChange={handleDistrictChange}
                        label="State"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {DISTRICTS?.map((district: string) => {
                                return (<MenuItem value={district} key={district}>{district}</MenuItem>)
                            })}
                        </Select>
                    </FormControl>
                    <Button type='submit'>Create Store</Button>
                </form>
            </Box>
        </Box>
    )
}

export default CreateStoreForm;