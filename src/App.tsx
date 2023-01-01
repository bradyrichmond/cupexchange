import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useLocation,
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

const buildRoutes = (isLoggedIn: boolean, pathname: string, userGroups: string[]) => createBrowserRouter([
  {
    path: '/',
    element: isLoggedIn ? <Home /> : <Navigate to='/login' state={{goto: pathname}}/>,
    children: [
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
        element: <Box></Box>
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
  const pathname = window.location.pathname;

  return (
    <RouterProvider router={buildRoutes(userIsLoggedIn, pathname, userGroups)} />
  );
}
