import React from 'react';
import { Box } from '@mui/system';
import { Outlet } from 'react-router';
import Navigation from '../Navigation';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';

export const themeOptions: ThemeOptions = {
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#f71c04',
      },
      error: {
        main: '#f71c04',
      },
      warning: {
        main: '#746404',
      },
      info: {
        main: '#fc860c',
      },
    },
    typography: {
      fontFamily: 'Allerta',
    },
    shape: {
      borderRadius: 16,
    },
};

const theme = createTheme(themeOptions);

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box height='100%' width='100%' display='flex' flexDirection='row'>
                <Box>
                    <Navigation />
                </Box>
                <Box flex='1' height='100%' bgcolor='rgba(255, 207, 0, 255)' display='flex' overflow='auto'>
                    <Outlet />
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Home;