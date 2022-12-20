import { Amplify, DataStore } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
import { Outlet, useNavigate } from 'react-router';
import { Box } from '@mui/material';
import { User } from '../models';

Amplify.configure(awsExports);

export default function Login() {
  const navigate = useNavigate();

  const userLoggedIn = (user: any | undefined) => {
    checkIfNewUser(user);
    return true;
  }

  const checkIfNewUser = async (user: any | undefined) => {
    const fbUsername = user.username;
    const email = user.attributes.email;
    console.log(JSON.stringify(user));
    if (fbUsername) {
      const users = await DataStore.query(User, (u) => u.fbUsername.eq(fbUsername));
      if (users.length < 1) {
        navigate('/signup', { state: { fbUsername, email }})
      }

      if (users.length > 0) {
        navigate('/home', { state: { fbUsername, email }});
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
          {/* sidebar */}
          {/* <Outlet /> */}
        </Box>
      )}
    </Authenticator>
  );
}