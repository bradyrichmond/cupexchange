import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Box } from '@mui/material';

import './App.css';

import Root from './routes/Root';
import Error from './Error';
import SignUp from './features/SignUp';
import Home from './features/Home';
import Stores from './features/Stores';
import Upcoming from './features/Trips';

import { selectUserCognitoGroups, selectUserIsLoggedIn } from './features/User/UserSlice';
import { useSelector } from 'react-redux';
import StoreData from './features/Stores/StoreData';
import Users from './features/User';
import TripData from './features/Trips/TripData';
import Orders from './features/Orders';
import Cart from './features/Orders/Cart';
import Profile from './features/User/Profile';
import UserData from './features/User/UserData';

export const buildRoutes = (isLoggedIn: boolean, pathname: string, userIsModerator: boolean) => createBrowserRouter([
  {
    path: '/',
    element: isLoggedIn ? <Home /> : <Navigate to='/login' state={{goto: pathname}}/>,
    children: [
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'stores',
        element: <Stores />
      },
      {
        path: 'stores/:id',
        element: <StoreData />
      },
      {
        path: 'upcoming',
        element: <Upcoming />
      },
      {
        path: 'upcoming/:id',
        element: <TripData />
      },
      {
        path: 'users',
        element: userIsModerator ? <Users /> : <Box>Access Denied</Box>
      },
      {
        path: 'users/:id',
        element: <UserData />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  },
  {
    path: '/login',
    element: <Root />,
    errorElement: <Error />
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <Error />
  }
]);

export default function App() {
  const userIsLoggedIn = useSelector(selectUserIsLoggedIn);
  const userGroups = useSelector(selectUserCognitoGroups);
  const userIsModerator = userGroups.includes('moderators');
  const pathname = window.location.pathname;

  return (
    <RouterProvider router={buildRoutes(userIsLoggedIn, pathname, userIsModerator)} />
  );
}
