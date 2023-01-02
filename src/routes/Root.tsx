import { Amplify, DataStore } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
import { useLocation, useNavigate } from 'react-router';
import { Box } from '@mui/material';
import { User } from '../models';
import { getUserData, setFbUsername, setIsLoggedIn, setUserGroups } from '../features/User/UserSlice';
import { useAppDispatch } from '../hooks';

Amplify.configure(awsExports);

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

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
        await dispatch(setFbUsername(user.username));
        await dispatch(setIsLoggedIn(true));
        await dispatch(setUserGroups(user.signInUserSession.accessToken.payload['cognito:groups']));
        await dispatch(getUserData(fbUsername));
        navigate(location.state.goto);
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