import React, { useState } from 'react';
import { Badge, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import ViewListIcon from '@mui/icons-material/ViewList';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectUserCognitoGroups } from '../User/UserSlice';
import { ShoppingCartOutlined } from '@mui/icons-material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { selectCartItems } from '../Orders/CartSlice';
import legoHead from '../../images/lego_head.png';

const Navigation = () => {
    const userGroups = useAppSelector(selectUserCognitoGroups);
    const userIsModerator = userGroups.includes('moderators');
    const cartItems = useAppSelector(selectCartItems);
    const [expandMenu, setExpandMenu] = useState(false);

    const itemCount = cartItems.reduce((pre, curr) => pre + curr.count, 0);

    const toggleMenu = () => {
        setExpandMenu((current) => !current);
    }

    return (
        <Box display='flex' flexDirection='column' padding='2rem' height='100%' bgcolor='rgba(0,0,0,255)' justifyContent='center' alignItems='center'>
            <Box justifyContent='center' alignItems='center' display='flex' flexDirection='column' flex='1' paddingTop='20rem' paddingBottom='20rem'>

                <Box marginBottom='2rem' display='flex' flexDirection='row' alignItems='center' fontSize='50px' flex='1'>
                    <Link to='/stores'>
                        <StoreIcon htmlColor='rgba(131,133,146,255)' fontSize='inherit' />
                    </Link>
                </Box>

                <Box marginBottom='2rem' display='flex' flexDirection='row' alignItems='center' fontSize='50px' flex='1'>
                    <Link to='/upcoming'>
                        <AvTimerIcon htmlColor='rgba(131,133,146,255)' fontSize='inherit' />
                    </Link>
                </Box>

                <Box marginBottom='2rem' display='flex' flexDirection='row' alignItems='center' fontSize='50px' flex='1'>
                    <Link to="/cart">
                        <Badge badgeContent={itemCount ?? 0} color='primary'>
                            <ShoppingCartOutlined htmlColor='rgba(131,133,146,255)' fontSize='inherit' />
                        </Badge>
                    </Link>
                </Box>

                <Box marginBottom='2rem' display='flex' flexDirection='row' alignItems='center' fontSize='50px' flex='1'>
                    <Link to='/'>
                        <AutoFixHighIcon htmlColor='rgba(131,133,146,255)' fontSize='inherit' />
                    </Link>
                </Box>

                <Box marginBottom='2rem' display='flex' flexDirection='row' alignItems='center' fontSize='50px' flex='1'>
                    <Link to='/orders'>
                        <ViewListIcon htmlColor='rgba(131,133,146,255)' fontSize='inherit' />
                    </Link>
                </Box>

                {userIsModerator &&
                    <Box marginBottom='2rem' display='flex' flexDirection='row' alignItems='center' fontSize='50px' flex='1'>
                        <Link to='/users'>
                            <ManageAccountsIcon htmlColor='rgba(131,133,146,255)' fontSize='inherit' />
                        </Link>
                    </Box>
                }
                
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' marginBottom='2rem'>
                <Link to="/profile">
                    <img src={legoHead} width='50px' height='50px'/>
                </Link>
            </Box>
        </Box>
    )
}

export default Navigation;