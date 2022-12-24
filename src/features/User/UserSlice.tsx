import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DataStore } from 'aws-amplify';
import { CreateAddressInput, CreateUserInput } from '../../API';
import { User, Address } from '../../models';


export const createUserAddress = createAsyncThunk<string, CreateAddressInput> (
  'users/createUserAddress',
  async (addressData: CreateAddressInput) => {
    const { address, address2, city, district, postal_code } = addressData;
    const userAddress = new Address({ address, address2, city, district, postal_code });
    await DataStore.save(userAddress);
    return userAddress.id;
  }
);

export const createUser = createAsyncThunk<void, CreateUserInput>(
  'users/createUser',
  async (userData: CreateUserInput) => {
    const { fbUsername, first_name, last_name, userAddressId, email } = userData;
    await DataStore.save(new User({ fbUsername, first_name, last_name, userAddressId, email }));
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    fbUsername: '',
    userGroups: [],
    loading: false,
    addressId:''
  },
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
    })
  },
});

export const { setIsLoggedIn, setFbUsername, setUserGroups } = userSlice.actions;

export const selectUserIsLoggedIn = (state: any) => state.user.isLoggedIn;
export const selectFbUsername = (state: any) => state.user.fbUsername;
export const selectUserCognitoGroups = (state: any) => state.user.userGroups;
export const selectAddressId = (state: any) => state.user.addressId;

export default userSlice.reducer;