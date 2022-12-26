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

import { selectUserIsLoggedIn } from './features/User/UserSlice';
import { useSelector } from 'react-redux';

const buildRoutes = (isLoggedIn: boolean, pathname: string) => createBrowserRouter([
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
        element: <Box>Store data page</Box>
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
  const pathname = window.location.pathname;

  return (
    <RouterProvider router={buildRoutes(userIsLoggedIn, pathname)} />
  );
}
