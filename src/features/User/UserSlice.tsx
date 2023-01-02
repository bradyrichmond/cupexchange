import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DataStore } from 'aws-amplify';
import { CreateAddressInput, CreateUserInput } from '../../API';
import { User, Address, LazyUser } from '../../models';
import { RootState } from '../../store';

export const getUserData = createAsyncThunk<User, string>(
  'users/getUser',
  async (fbUsername: string) => {
    const userData = await DataStore.query(User, (u) => u.fbUsername.eq(fbUsername));
    return userData[0];
  }
)

export const createUserAddress = createAsyncThunk<string, CreateAddressInput> (
  'users/createUserAddress',
  async (addressData: CreateAddressInput) => {
    const { address, address2, city, district, postal_code } = addressData;
    const userAddress = new Address({ address, address2, city, district, postal_code });
    await DataStore.save(userAddress);
    return userAddress.id;
  }
);

interface UserType {
  id: string
  first_name: string
  last_name: string
  fbUsername: string
  email: string
}

export const createUser = createAsyncThunk<UserType, CreateUserInput>(
  'users/createUser',
  async (userDataInput: CreateUserInput) => {
    const { fbUsername, first_name, last_name, userAddressId, email } = userDataInput;
    const userDataRaw = await DataStore.save(new User({ fbUsername, first_name, last_name, userAddressId, email }));
    const userData = { id: userDataRaw.id, first_name: userDataRaw.first_name, last_name: userDataRaw.last_name, fbUsername: userDataRaw.fbUsername, email: userDataRaw.email }
    return userData;
  }
);

interface InitialState {
  isLoggedIn: boolean
  fbUsername: string
  userGroups: string[]
  userName: string
  loading: boolean
  addressId: string
  userData: UserType | undefined
}

const initialState: InitialState = {
  isLoggedIn: false,
  fbUsername: '',
  userGroups: [],
  userName: '',
  loading: false,
  addressId:'',
  userData: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setFbUsername: (state, action) => {
      state.fbUsername = action.payload;
    },
    setUserGroups: (state, action) => {
      state.userGroups = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(createUserAddress.rejected, (state, action) => {
      console.log('createUserAddressFail');
      state.loading = false;
    })
    .addCase(createUserAddress.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(createUserAddress.fulfilled, (state, action) => {
      state.loading = false;
      state.addressId = action.payload;
    })
    .addCase(createUser.rejected, (state, action) => {
      console.log('createUserFail');
      state.loading = false;
    })
    .addCase(createUser.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.userData = action.payload;
    })
    .addCase(getUserData.rejected, (state, action) => {
      console.log('getUserDataFail');
      state.loading = false;
    })
    .addCase(getUserData.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    })
  },
});

export const { setIsLoggedIn, setFbUsername, setUserGroups } = userSlice.actions;

export const selectUserIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectFbUsername = (state: RootState) => state.user.fbUsername;
export const selectUserCognitoGroups = (state: RootState) => state.user.userGroups;
export const selectAddressId = (state: RootState) => state.user.addressId;
export const selectUserData = (state: RootState) => state.user.userData;

export default userSlice.reducer;