import React, { useEffect, useState } from 'react';
import { Box, Card, Typography } from '@mui/material';
import { useAppSelector } from '../../hooks';
import { selectUserData } from './UserSlice';
import { getAddressById } from '../../utils/base';

interface AddressDataType {
    address: string
    address2: string | null | undefined
    district: string
    city: string
    postal_code: string
}

let initialAddressData: AddressDataType;

const Profile = () => {
    const currentUser = useAppSelector(selectUserData);
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

    const { first_name, last_name, email } = currentUser ? currentUser : { first_name: '', last_name: '', email: '' };
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