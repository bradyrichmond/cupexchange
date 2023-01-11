import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { CreateAddressInput, CreateUserInput } from '../../API';
import { createAddress, createUser } from '../../graphql/mutations';
import { getUser, listUsers } from '../../graphql/queries';
import { User } from '../../models';
import { RootState } from '../../store';

export const getUserData = createAsyncThunk<User, string>(
  'users/getUser',
  async (fbUsername: string) => {
    const userData = await (API.graphql(graphqlOperation(listUsers, {
      filter: {
          fbUsername: {
              eq: fbUsername
          }
        }
      })) as Promise<any>
    );

    return userData.data.listUsers.items[0];
  }
)

export const createUserAddress = createAsyncThunk<string, CreateAddressInput> (
  'users/createUserAddress',
  async (addressData: CreateAddressInput) => {
    const { address, address2, city, district, postal_code } = addressData;
    const userAddress = await (API.graphql(graphqlOperation(createAddress, { input: { address, address2, city, district, postal_code } })) as Promise<any>)
    return userAddress;
  }
);

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    const users = await (API.graphql(graphqlOperation(listUsers)) as Promise<any>)
    return users.data.listUsers.items;
  }
)

export const getUserById = createAsyncThunk(
  'users/getUserById',
  async (id: string) => {
    const user = await (API.graphql(graphqlOperation(getUser, { id })) as Promise<any>)
    return user.data;
  }
)

interface UserType {
  id: string
  first_name: string
  last_name: string
  fbUsername: string
  email: string
}

export const createUserMutation = createAsyncThunk<UserType, CreateUserInput>(
  'users/createUser',
  async (userDataInput: CreateUserInput) => {
    const { fbUsername, first_name, last_name, userAddressId, email } = userDataInput;
    const userDataRaw = await (API.graphql(graphqlOperation(createUser, {input: { fbUsername, first_name, last_name, userAddressId, email } })) as Promise<any>);
    const userDataResult = userDataRaw.result;
    const userData = { id: userDataResult.id, first_name: userDataResult.first_name, last_name: userDataResult.last_name, fbUsername: userDataResult.fbUsername, email: userDataResult.email }
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
  users: User[],
  userById: User | undefined
}

const initialState: InitialState = {
  isLoggedIn: false,
  fbUsername: '',
  userGroups: [],
  userName: '',
  loading: false,
  addressId:'',
  userData: undefined,
  users: [],
  userById: undefined
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
    .addCase(createUserMutation.rejected, (state, action) => {
      console.log('createUserMutationFail');
      state.loading = false;
    })
    .addCase(createUserMutation.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(createUserMutation.fulfilled, (state, action) => {
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
    .addCase(getUsers.rejected, (state, action) => {
      console.log('getUserFail');
      state.loading = false;
    })
    .addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(getUserById.rejected, (state, action) => {
      console.log('getUserFail');
      state.loading = false;
    })
    .addCase(getUserById.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.userById = action.payload;
    })
  },
});

export const { setIsLoggedIn, setFbUsername, setUserGroups } = userSlice.actions;

export const selectUserIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectFbUsername = (state: RootState) => state.user.fbUsername;
export const selectUserCognitoGroups = (state: RootState) => state.user.userGroups;
export const selectAddressId = (state: RootState) => state.user.addressId;
export const selectUserData = (state: RootState) => state.user.userData;
export const selectUsers = (state: RootState) => state.user.users;
export const selectUserById = (state: RootState) => state.user.userById;

export default userSlice.reducer;