import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Badge, Box, Theme } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import ViewListIcon from '@mui/icons-material/ViewList';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectUserCognitoGroups } from '../User/UserSlice';
import { ShoppingCartOutlined } from '@mui/icons-material';
import CancelIcon from '@mui/icons-material/Cancel';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { selectCartItems } from '../Orders/CartSlice';
import legoHead from '../../images/lego_head.png';
import { ResponsiveContext } from '../Home';
import clsx from 'clsx';

const Navigation = () => {

    return (
        <ResponsiveContext.Consumer>
            {({
                isDesktopOrLaptop,
                isBigScreen,
                isTabletOrMobile,
                isPortrait,
                isRetina
            }) => {
                    return (
                        <>
                            {isDesktopOrLaptop && <NavigationContent closeNavigation={() => {}}/>}
                            {isTabletOrMobile && <MobileNavigationContent />}
                        </>
                    )
                }
            }
        </ResponsiveContext.Consumer>
    )
}

const useMobileStyles = makeStyles((theme: Theme) => createStyles({
    navigation: {
        width: '100%',
        background: 'rgba(0,0,0,255)',
        position: 'fixed',
        top: 0,
        left: 0,
        transition: '1s all linear',
        overflow: 'hidden',
        zIndex: '9999',
        height: '100%'
    },
    navigationOpened: {
        transform: 'translateY(0%)'
    },
    navigationClosed: {
        transform: 'translateY(100%)'
    }
}));

const MobileNavigationContent = () => {
    const [expand, setExpand] = useState(false);
    const classes = useMobileStyles();

    return (
        <Box>
            <Box  position='fixed' right='1rem' bottom='1rem' fontSize='1rem' bgcolor='rgba(0,0,0,255)' borderRadius='3rem' padding='1rem' height='3rem' width='3rem' zIndex={10000}>
                {expand ?
                <CancelIcon fontSize='inherit' htmlColor='rgba(131,133,146,255)' onClick={() => setExpand(false)}/>
                :
                <MenuIcon fontSize='inherit' htmlColor='rgba(131,133,146,255)' onClick={() => setExpand(true)}/>
                }
            </Box>
            <div className={clsx(classes.navigation, { [classes.navigationOpened]: expand }, { [classes.navigationClosed]: !expand }) }>
                <NavigationContent closeNavigation={() => { setExpand(false) }}/>
            </div>
        </Box>
    )
}

interface NavigationContentProps {
    closeNavigation: () => void
}

const NavigationContent = (props: NavigationContentProps) => {
    const { closeNavigation } = props;
    const userGroups = useAppSelector(selectUserCognitoGroups);
    const userIsModerator = userGroups.includes('moderators');
    const cartItems = useAppSelector(selectCartItems);
    const itemCount = cartItems.reduce((pre, curr) => pre + curr.count, 0);

    return (
        <Box display='flex' flexDirection='column' padding='2rem' height='100%' bgcolor='rgba(0,0,0,255)' justifyContent='center' alignItems='center'>
            <Box justifyContent='center' alignItems='center' display='flex' flexDirection='column' flex='1' paddingTop='20rem' paddingBottom='20rem'>

                <Box marginBottom='2rem' display='flex' flexDirection='row' alignItems='center' fontSize='50px' flex='1'>
                    <Link onClick={closeNavigation} to='/stores'>
                        <StoreIcon htmlColor='rgba(131,133,146,255)' fontSize='inherit' />
                    </Link>
                </Box>

                <Box marginBottom='2rem' display='flex' flexDirection='row' alignItems='center' fontSize='50px' flex='1'>
                    <Link onClick={closeNavigation} to='/upcoming'>
                        <AvTimerIcon htmlColor='rgba(131,133,146,255)' fontSize='inherit' />
                    </Link>
                </Box>

                <Box marginBottom='2rem' display='flex' flexDirection='row' alignItems='center' fontSize='50px' flex='1'>
                    <Link onClick={closeNavigation} to="/cart">
                        <Badge badgeContent={itemCount ?? 0} color='primary'>
                            <ShoppingCartOutlined htmlColor='rgba(131,133,146,255)' fontSize='inherit' />
                        </Badge>
                    </Link>
                </Box>

                <Box marginBottom='2rem' display='flex' flexDirection='row' alignItems='center' fontSize='50px' flex='1'>
                    <Link onClick={closeNavigation} to='/'>
                        <AutoFixHighIcon htmlColor='rgba(131,133,146,255)' fontSize='inherit' />
                    </Link>
                </Box>

                <Box marginBottom='2rem' display='flex' flexDirection='row' alignItems='center' fontSize='50px' flex='1'>
                    <Link onClick={closeNavigation} to='/orders'>
                        <ViewListIcon htmlColor='rgba(131,133,146,255)' fontSize='inherit' />
                    </Link>
                </Box>

                {userIsModerator &&
                    <Box marginBottom='2rem' display='flex' flexDirection='row' alignItems='center' fontSize='50px' flex='1'>
                        <Link onClick={closeNavigation} to='/users'>
                            <ManageAccountsIcon htmlColor='rgba(131,133,146,255)' fontSize='inherit' />
                        </Link>
                    </Box>
                }
                
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' marginBottom='2rem'>
                <Link onClick={closeNavigation} to="/profile">
                    <img src={legoHead} width='50px' height='50px' alt='user profile link lego head'/>
                </Link>
            </Box>
        </Box>
    )
}

export default Navigation;