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

const Navigation = () => {
    const userGroups = useAppSelector(selectUserCognitoGroups);
    const userIsModerator = userGroups.includes('moderators');
    const cartItems = useAppSelector(selectCartItems);
    const [expandMenu, setExpandMenu] = useState(false);

    const toggleMenu = () => {
        setExpandMenu((current) => !current);
    }

    return (
        <Box display='flex' flexDirection='column' padding='1rem' borderRight='10px solid rgba(246,236,54,255)' height='100%' bgcolor='rgba(208,16,18,255)'>
            <Box marginBottom='1rem' onClick={toggleMenu}>
                <MenuIcon htmlColor='rgba(255,255,255,255)'/>
            </Box>
            <Box marginBottom='1rem' display='flex' flexDirection='row' alignItems='center'>
                <Link to='/stores'>
                    <StoreIcon htmlColor='rgba(255,255,255,255)' />
                    {expandMenu && <Box display='flex' justifyContent='center' alignItems='center'><Typography color='rgba(255,255,255,255)' display='inline' paddingLeft='1rem'>Stores</Typography></Box>}
                </Link>
            </Box>
            <Box marginBottom='1rem' display='flex' flexDirection='row' alignItems='center'>
                <Link to='/upcoming'>
                    <AvTimerIcon htmlColor='rgba(255,255,255,255)' />
                    {expandMenu && <Box display='flex' justifyContent='center' alignItems='center'><Typography color='rgba(255,255,255,255)' display='inline' paddingLeft='1rem'>Upcoming Trips</Typography></Box>}
                </Link>
            </Box>
            <Box marginBottom='1rem' display='flex' flexDirection='row' alignItems='center'>
                <Link to="/cart">
                    <Badge badgeContent={cartItems.length} >
                        <ShoppingCartOutlined htmlColor='rgba(255,255,255,255)' />
                    </Badge>
                    {expandMenu && <Box display='flex' justifyContent='center' alignItems='center'><Typography color='rgba(255,255,255,255)' display='inline' paddingLeft='1rem'>Cart</Typography></Box>}
                </Link>
            </Box>
            <Box marginBottom='1rem' display='flex' flexDirection='row' alignItems='center'>
                <AutoFixHighIcon htmlColor='rgba(255,255,255,255)' />
                {expandMenu && <Box display='flex' justifyContent='center' alignItems='center'><Typography color='rgba(255,255,255,255)' display='inline' paddingLeft='1rem'>Your Wishlist</Typography></Box>}
            </Box>
            <Box marginBottom='1rem' display='flex' flexDirection='row' alignItems='center'>
                <ViewListIcon htmlColor='rgba(255,255,255,255)' />
                {expandMenu && <Box display='flex' justifyContent='center' alignItems='center'><Typography color='rgba(255,255,255,255)' display='inline' paddingLeft='1rem'>Your Orders</Typography></Box>}
            </Box>
            {userIsModerator &&
                <Box marginBottom='1rem' display='flex' flexDirection='row' alignItems='center'>
                    <Link to='/users'>
                        <ManageAccountsIcon htmlColor='rgba(255,255,255,255)' />
                        {expandMenu && <Box display='flex' justifyContent='center' alignItems='center'><Typography color='rgba(255,255,255,255)' display='inline' paddingLeft='1rem'>User Management</Typography></Box>}
                    </Link>
                </Box>
            }
        </Box>
    )
}

export default Navigation;