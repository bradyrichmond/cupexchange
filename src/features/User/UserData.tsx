import React, { useEffect, useState } from 'react';
import { Button, Card } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router';
import { getUserById } from '../../utils/base';
import { banUser, selectUserCognitoGroups, selectUserData, UserType } from './UserSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

let initialUserData: UserType | undefined;

const UserData = () => {
    const { id } = useParams();
    const [idUser, setIdUser] = useState(initialUserData);
    const currentUser = useAppSelector(selectUserData);
    const groups = useAppSelector(selectUserCognitoGroups);
    const userIsModerator = groups.includes("moderators");
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getUserData = async () => {
            const userData = await getUserById(id ?? '');
            setIdUser(userData);
        }

        getUserData();
    }, [])

    const handleBanUser = () => {
        dispatch(banUser(id ?? ''));
    }

    return (
        <Box padding='2rem'>
            <Card>
                <Box display='flex' justifyContent='center' alignItems='center' paddingBottom='3rem'>{idUser?.first_name} {idUser?.last_name}</Box>
                {userIsModerator && currentUser?.id !== id && <Box><Button variant='contained' color='secondary' onClick={handleBanUser}>Ban User</Button></Box>}
            </Card>
        </Box>
    )
}

export default UserData;