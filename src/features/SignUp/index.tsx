import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Theme, Typography } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { useLocation, useNavigate } from 'react-router';
import { setFbUsername, setUserGroups, createUserAddress, selectAddressId, createUser } from '../User/UserSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

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
    const [isLoading, setIsLoading] = useState(false);
    const locData = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const addressId = useAppSelector(selectAddressId);

    const createUserAccount = async (data: any) => {
        setIsLoading(true);
        const { firstName, lastName, address1, address2, city, usState, zipCode } = data;
        dispatch(createUserAddress({ address: address1, address2, city, district: usState, postal_code: zipCode }));
        dispatch(createUser({ first_name: firstName, last_name: lastName, userAddressId: addressId, email: locData.state.email, fbUsername: locData.state.fbUsername }))
        dispatch(setFbUsername(locData.state.fbUsername));
        dispatch(setUserGroups(locData.state.groups));
        navigate('/');
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
                            <TextField id="standard-basic" label="First Name" variant="standard" {...register('firstName', { required: true, minLength: 2 })} />
                            <TextField id="standard-basic" label="Last Name" variant="standard" {...register('lastName', { required: true, minLength: 2 })} />
                        </Box>
                    </Box>
                    <Box marginTop='1rem'>
                        <Typography fontSize='2rem' paddingBottom='1rem'>Address</Typography>
                        <Box>
                            <TextField id="standard-basic" label="Address 1" variant="standard" {...register('address1', { required: true })}/>
                            <TextField id="standard-basic" label="Address 2" variant="standard" {...register('address2')}/>
                        </Box>
                        <Box>
                            <TextField id="standard-basic" label="City" variant="standard" {...register('city', { required: true, minLength: 2 })} />
                            <TextField id="standard-basic" label="State" variant="standard" {...register('usState', { required: true, minLength: 2 })} />
                            <TextField id="standard-basic" label="Zip Code" variant="standard" {...register('zipCode', { required: true, minLength: 5 })} />
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