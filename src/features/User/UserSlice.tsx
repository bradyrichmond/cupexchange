import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserIsLoggedIn = (state: any) => state.user.userData.isLoggedIn;
export const selectUserCognitoGroups = (state: any) => state.user.signInUserSession.accessToken.payload['cognito:groups'];

export default userSlice.reducer;