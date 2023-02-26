import React, { useEffect, useState } from 'react';
import { Button, Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router';
import { getUserById } from '../../utils/base';
import { banUser, selectUserCognitoGroups, selectUserData, UserType } from './UserSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { API, Auth } from 'aws-amplify';
import UserHistory from './Userhistory';

let initialUserData: UserType | undefined;

const UserData = () => {
    const { id } = useParams();
    const [idUser, setIdUser] = useState(initialUserData);
    const currentUser = useAppSelector(selectUserData);
    const groups = useAppSelector(selectUserCognitoGroups);
    const userIsModerator = groups.includes("moderators");
    const userIsAdmin = groups.includes("admins");
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getUserData = async () => {
            const userData = await getUserById(id ?? '');
            setIdUser(userData);
        }

        getUserData();
    }, [id])

    const handleBanUser = () => {
        dispatch(banUser(id ?? ''));
    }

    const handlePromoteToModerator = async () => {
        const fbUsername = currentUser?.fbUsername;
        if (fbUsername){
            await promoteUser(fbUsername, "moderators");
        }
    }

    const handlePromoteToAdmin = async () => {
        const fbUsername = currentUser?.fbUsername;
        if (fbUsername){
            await promoteUser(fbUsername, "admins");
        }
    }

    const promoteUser = async (fbUsername: string, role: string) => {
        let apiName = 'AdminQueries';
        let path = '/addUserToGroup';

        let myInit = {
            body: {
                "username" : fbUsername,
                "groupname": role
            }, 
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            } 
        }
        return await API.post(apiName, path, myInit);
    }

    return (
        <Box padding='2rem' width='100%' height='100%' display='flex' flexDirection='column' flex='1'>
            <Box marginBottom='2rem'>
                <Card>
                    <Box display='flex' justifyContent='center' alignItems='center' paddingBottom='3rem'>
                        <Typography variant='h2'>{idUser?.first_name} {idUser?.last_name}</Typography>
                    </Box>
                    {userIsModerator && currentUser?.id !== id && <Box><Button variant='contained' color='secondary' onClick={handleBanUser}>Ban User</Button></Box>}
                    {userIsAdmin && currentUser?.id !== id  && <Box><Button variant='contained' color='secondary' onClick={handlePromoteToModerator}>Promote User to Moderator</Button></Box>}
                    {userIsAdmin && currentUser?.id !== id  && <Box><Button variant='contained' color='secondary' onClick={handlePromoteToAdmin}>Promote User to Admin</Button></Box>}
                </Card>
            </Box>
            <Box flex='1' display='flex' flexDirection='column'>
                <UserHistory userId={id ?? ''} />
            </Box>
        </Box>
    )
}

export default UserData;