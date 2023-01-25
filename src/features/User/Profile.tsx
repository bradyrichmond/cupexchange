import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Box, Card, Typography, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUserData, updateUserAddress } from './UserSlice';
import { getAddressById, createAddress } from '../../utils/base';
import { DISTRICTS } from '../../utils/constants';

interface AddressDataType {
    address: string
    address2: string | null | undefined
    district: string
    city: string
    postal_code: string
}

let initialAddressData: AddressDataType;

const Profile = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(selectUserData);
    const [selectedDistrict, setSelectedDistrict] = useState('')
    const [addressData, setAddressData] = useState(initialAddressData);

    useEffect(() => {
        const getAddress = async () => {
            const addressId = currentUser?.userAddressId;
            const fetchedAddressData = await getAddressById(addressId ?? '');

            if (fetchedAddressData) {
                setAddressData(fetchedAddressData);
            }
        }

        getAddress()
    }, [currentUser])

    const handleDistrictChange = (e:SelectChangeEvent<string>) => {
        setSelectedDistrict(e.target.value);
    }

    const submitAddressChange = async (data: any) => {
        const { address1, address2, city, zipCode } = data;
        
        const addressId = await createAddress({ address: address1, address2, district: selectedDistrict, city, postal_code: zipCode });
        dispatch(updateUserAddress({ id: currentUser?.id ?? '', userAddressId: addressId }))
    }

    const { first_name, last_name, email, paypalMeURL } = currentUser ? currentUser : { first_name: '', last_name: '', email: '', paypalMeURL: '' };
    const { address, address2, city, district, postal_code } = addressData ? addressData : { address: '', address2: '', city: '', district: '', postal_code: '' };

    return (
        <Box padding='2rem' width='auto'>
            <Box display='flex' justifyContent='center' alignItems='center' paddingBottom='2rem'>
                <Typography variant="h1">User Profile</Typography>
            </Box>
            <Card sx={{padding: '2rem'}}>
                <Box>
                    <Box display='flex' flexDirection='row'>
                        <Box>
                            <Typography variant='h3'>First Name</Typography>
                        </Box>
                        <Box flex='1' display='flex' justifyContent='flex-end'>
                            <Typography variant='h3'>{first_name}</Typography>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection='row'>
                        <Box>
                            <Typography variant='h3'>Last Name:</Typography>
                        </Box>
                        <Box flex='1' display='flex' justifyContent='flex-end'>
                            <Typography variant='h3'>{last_name}</Typography>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection='row'>
                        <Box>
                            <Typography variant='h3'>Email:</Typography>
                        </Box>
                        <Box flex='1' display='flex' justifyContent='flex-end'>
                            <Typography variant='h3'>{email}</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box display='flex' justifyContent='center' alignItems='center' paddingBottom='2rem' paddingTop='2rem' flexDirection='column'>
                    <Typography variant="h1">Address</Typography>
                    <Box paddingTop='2rem' display='flex' flexDirection='column'>
                        <Box paddingBottom='1rem'>
                            <Typography variant='h3'>{address}</Typography>
                        </Box>
                        {address2 && <Box paddingBottom='1rem'>
                            <Typography variant='h3'>{address2}</Typography>
                        </Box>}
                        <Box paddingBottom='1rem'>
                            <Typography variant='h3'>{city}, {district} {postal_code}</Typography>
                        </Box>
                    </Box>
                </Box>

            </Card>
        </Box>
    )
}

export default Profile;