import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Theme, Typography, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { useLocation, useNavigate } from 'react-router';
import { setFbUsername, setUserGroups, createUserAddress, selectAddressId, createUserMutation } from '../User/UserSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { DISTRICTS } from '../../utils/constants';

const useStyles = makeStyles((theme: Theme) => createStyles({
    textInputSpacing: {
        marginRight: '1rem'
    },
    submit: {
        margin: '2rem'
    }
}));

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const classes = useStyles();
    const [district, setDistrict] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const locData = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const addressId = useAppSelector(selectAddressId);

    const createUserAccount = async (data: any) => {
        setIsLoading(true);
        const { firstName, lastName, address1, address2, city, usState, zipCode } = data;
        dispatch(createUserAddress({ address: address1, address2, city, district: usState, postal_code: zipCode }));
        dispatch(createUserMutation({ first_name: firstName, last_name: lastName, userAddressId: addressId, email: locData.state.email, fbUsername: locData.state.fbUsername }))
        dispatch(setFbUsername(locData.state.fbUsername));
        dispatch(setUserGroups(locData.state.groups));
        navigate('/');
    }

    const handleDistrictChange = (e:SelectChangeEvent<string>) => {
        setDistrict(e.target.value);
    }

    return (
        <Box display='flex' justifyContent='center' alignItems='center' height='100%'>
            {isLoading && <Typography>Loading...</Typography>}
            {!isLoading && 
            <Box border='1px solid #ccc' borderRadius='1rem' padding='2rem' justifyContent='center' alignItems='center'>
                <Typography fontSize='3rem' paddingBottom='2rem'>Complete Sign up</Typography>
                <form onSubmit={handleSubmit(createUserAccount)}>
                    <Box display='flex' flexDirection='column' fontSize='2rem'>
                        <Typography fontSize='2rem' paddingBottom='1rem'>Name</Typography>
                        <Box display='flex' flexDirection='row'>
                            <TextField label="First Name" variant="standard" {...register('firstName', { required: true, minLength: 2 })} />
                            <TextField label="Last Name" variant="standard" {...register('lastName', { required: true, minLength: 2 })} />
                        </Box>
                    </Box>
                    <Box marginTop='1rem'>
                        <Typography fontSize='2rem' paddingBottom='1rem'>Address</Typography>
                        <Box>
                            <TextField label="Address 1" variant="standard" {...register('address1', { required: true })}/>
                            <TextField label="Address 2" variant="standard" {...register('address2')}/>
                        </Box>
                        <Box>
                            <TextField label="City" variant="standard" {...register('city', { required: true, minLength: 2 })} />
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
                            <TextField label="Zip Code" variant="standard" {...register('zipCode', { required: true, minLength: 5 })} />
                        </Box>
                    </Box>
                    <Box marginTop='1rem'>
                        <Typography fontSize='2rem' paddingBottom='1rem'>Email</Typography>
                        <Typography>{locData.state.email}</Typography>
                    </Box>
                    <Box className={classes.submit}>
                        <Button type='submit'>Submit</Button>
                    </Box>
                </form>
            </Box>}
        </Box>
    )
}

export default SignUp;