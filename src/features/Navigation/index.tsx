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
        <Box display='flex' flexDirection='column' padding='1rem' borderRight='3px solid #ccc' height='100%'>
            <Box marginBottom='1rem'>
                <MenuIcon />
            </Box>
            <Box marginBottom='1rem'>
                <Link to='/stores'>
                    <StoreIcon />
                </Link>
            </Box>
            <Box marginBottom='1rem'>
                <AvTimerIcon />
            </Box>
            <Box marginBottom='1rem'>
                <ViewListIcon />
            </Box>
            <Box marginBottom='1rem'>
                <ManageAccountsIcon />
            </Box>
        </Box>
    )
}

export default Navigation;