import React, { createContext } from 'react';
import { Box } from '@mui/system';
import { Outlet } from 'react-router';
import Navigation from '../Navigation';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

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
export const ResponsiveContext = createContext({
  isDesktopOrLaptop: false,
  isBigScreen: false,
  isTabletOrMobile: false,
  isPortrait: false,
  isRetina: false
});

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <ResponsiveContext.Provider value={{
      isDesktopOrLaptop,
      isBigScreen,
      isTabletOrMobile,
      isPortrait,
      isRetina
    }}>
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
    </ResponsiveContext.Provider>
  )
}

export default Home;