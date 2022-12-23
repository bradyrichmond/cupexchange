import React from 'react';
import { Box } from '@mui/system';
import { Outlet } from 'react-router';
import Navigation from '../Navigation';

const Home = () => {
    return (
        <Box height='100%' width='100%' display='flex' flexDirection='row'>
            <Box>
                <Navigation />
            </Box>
            <Box>
                <Outlet />
            </Box>
        </Box>
    )
}

export default Home;