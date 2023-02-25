import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUserData } from '../User/UserSlice';
import { createStoreMutation, getStoreData } from './StoresSlice';
import { DISTRICTS } from '../../utils/constants';
import { DataStore } from 'aws-amplify';
import { User } from '../../models';
import ModalContainer from '../../utils/ModalContainer';

interface CreateStoreFormProps {
    close: () => void
}

const CreateStoreForm = ({ close }: CreateStoreFormProps) => {
    const { register, handleSubmit } = useForm();
    const [district, setDistrict] = useState('Alabama');
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(selectUserData);

    const handleDistrictChange = (e:SelectChangeEvent<string>) => {
        setDistrict(e.target.value);
    }

    const handleCreateStore = async (data: any) => {
        const { storeName, storeCity } = data;
        const userData = await DataStore.query(User, currentUser?.id ?? '');
        if (userData) {
            await dispatch(createStoreMutation({ name: storeName, city: storeCity, district, storeLastUpdateById: userData?.id ?? '', lastUpdateBy: userData }));
            await dispatch(getStoreData());
            close();
        }
    }

    return (
        <ModalContainer onClose={close}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom='2rem'>
                        Create Store
                    </Typography>
                    <form onSubmit={handleSubmit(handleCreateStore)}>
                        <TextField id="standard-basic" label="Store Name" variant="standard" {...register('storeName', { required: true, minLength: 2 })} />
                        <TextField id="standard-basic" label="Store City" variant="standard" {...register('storeCity', { required: true, minLength: 2 })} />
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel>State</InputLabel>
                            <Select
                                onChange={handleDistrictChange}
                                label="State"
                                value={district}
                            >
                                {DISTRICTS?.map((district: string) => {
                                    return (<MenuItem value={district} key={district}>{district}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                        <Button type='submit'>Create Store</Button>
                    </form>
                </Box>
            </Box>
        </ModalContainer>
    )
}

export default CreateStoreForm;