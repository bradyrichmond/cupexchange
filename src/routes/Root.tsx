import { Amplify, DataStore } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
import { Outlet, useNavigate } from 'react-router';
import { Box } from '@mui/material';
import { User } from '../models';
import { useDispatch } from 'react-redux';
import { setFbUsername, setIsLoggedIn, setUserGroups } from '../features/User/UserSlice';

Amplify.configure(awsExports);

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLoggedIn = (user: any | undefined) => {
    checkIfNewUser(user);
    return true;
  }

  const checkIfNewUser = async (user: any | undefined) => {
    const fbUsername = user.username;
    const email = user.attributes.email;
    const groups = user.signInUserSession.accessToken.payload['cognito:groups'];
    
    if (fbUsername) {
      const users = await DataStore.query(User, (u) => u.fbUsername.eq(fbUsername));
      if (users.length < 1) {
        navigate('/signup', { state: { fbUsername, email, groups }});
      }

      if (users.length > 0) {
        dispatch(setFbUsername(user.username));
        dispatch(setIsLoggedIn(true));
        dispatch(setUserGroups(user.signInUserSession.accessToken.payload['cognito:groups']));
        navigate('/');
      }
    }
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Box width='auto' height='100%'>
          {user && userLoggedIn(user) && 
            <Box />
          }
        </Box>
      )}
    </Authenticator>
  );
}