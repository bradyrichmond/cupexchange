import React from 'react';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import ViewListIcon from '@mui/icons-material/ViewList';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Box display='flex' flexDirection='column' padding='1rem' borderRight='10px solid rgba(246,236,54,255)' height='100%' bgcolor='rgba(208,16,18,255)'>
            <Box marginBottom='1rem'>
                <MenuIcon htmlColor='rgba(255,255,255,255)'/>
            </Box>
            <Box marginBottom='1rem'>
                <Link to='/stores'>
                    <StoreIcon htmlColor='rgba(255,255,255,255)' />
                </Link>
            </Box>
            <Box marginBottom='1rem'>
                <Link to='/upcoming'>
                    <AvTimerIcon htmlColor='rgba(255,255,255,255)' />
                </Link>
            </Box>
            <Box marginBottom='1rem'>
                <ViewListIcon htmlColor='rgba(255,255,255,255)' />
            </Box>
            <Box marginBottom='1rem'>
                <ManageAccountsIcon htmlColor='rgba(255,255,255,255)' />
            </Box>
        </Box>
    )
}

export default Navigation;