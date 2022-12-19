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
import SignUp from './features/SignUp/SignUp';

const buildRoutes = (isLoggedIn: boolean) => createBrowserRouter([
  {
    path: '/',
    element: isLoggedIn ? <Box>Logged in</Box> : <Navigate to='/login' />
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
  return (
    <RouterProvider router={buildRoutes(false)} />
  );
}
