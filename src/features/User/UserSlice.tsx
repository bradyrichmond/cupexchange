import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DataStore } from 'aws-amplify';
import { User, Address } from '../../models';

interface addressDataType {
  address1: string;
  address2: string;
  city: string;
  usState: string;
  zipCode: string;
}

interface userDataType {
  fbUsername: string;
  firstName: string;
  lastName: string;
  addressId: string | undefined;
  address: Address | undefined;
  email: string;
}

export const createUserAddress = createAsyncThunk<string, addressDataType> (
  'users/createUserAddress',
  async (addressData: addressDataType) => {
    const { address1, address2, city, usState, zipCode } = addressData;
    const userAddress = new Address({ address: address1, address2, city, district: usState, postal_code: zipCode });
    await DataStore.save(userAddress);
    return userAddress.id;
  }
);

export const createUser = createAsyncThunk<void, userDataType>(
  'users/createUser',
  async (userData: userDataType) => {
    const { fbUsername, firstName, lastName, address, email } = userData;
    await DataStore.save(new User({ fbUsername, first_name: firstName, last_name: lastName, address, userAddressId: address?.id, email }));
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