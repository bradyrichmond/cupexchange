import { Box } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <Box height='100%' width='100%'>
            <Box>
                navigation
            </Box>
            <Box>
                <Outlet />
            </Box>
        </Box>
    )
}

export default Home;