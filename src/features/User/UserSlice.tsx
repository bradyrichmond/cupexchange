import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DataStore } from 'aws-amplify';
import { CreateAddressInput, CreateUserInput } from '../../API';
import { Address, User } from '../../models';
import { RootState } from '../../store';

export interface UserType {
  id: string
  first_name: string
  last_name: string
  fbUsername: string
  email: string
  userAddressId?: string | null
  paypalMeURL?: string
}

export const getUserData = createAsyncThunk<UserType, string>(
  'users/getUser',
  async (username: string) => {
    const users = await DataStore.query(User, u => u.fbUsername.eq(username));
    const { id, first_name, last_name, fbUsername, email, userAddressId } = users[0];
    return { id, first_name, last_name, fbUsername, email, userAddressId };
  }
);

export const createUserAddress = createAsyncThunk<void, CreateAddressInput> (
  'users/createUserAddress',
  async (addressData: CreateAddressInput) => {
    const { address, address2, city, district, postal_code } = addressData;
    await DataStore.save(new Address({ address, address2, city, district, postal_code }));
  }
);

interface UpdateUserInput {
  id: string
  userAddressId?: string
}

export const updateUserAddress = createAsyncThunk(
  'users/updateUser',
  async (input: UpdateUserInput) => {
    const currentUser = await DataStore.query(User, input.id);
    if (currentUser) {
      const userData = await DataStore.save(User.copyOf(currentUser, updated => {

        if (input.userAddressId) {
          updated.userAddressId = input.userAddressId;
        }

      }))

      return userData;
    }
  }
)

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    return await DataStore.query(User);
  }
);

export const getUserById = createAsyncThunk(
  'users/getUserById',
  async (id: string) => {
    return await DataStore.query(User, id);
  }
);

export const createUserMutation = createAsyncThunk<User, CreateUserInput>(
  'users/createUser',
  async (userDataInput: CreateUserInput) => {
    const { fbUsername, first_name, last_name, userAddressId, email } = userDataInput;
    const userData = await DataStore.save(new User({ fbUsername, first_name, last_name, userAddressId, email }));
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
    .addCase(updateUserAddress.rejected, (state, action) => {
      console.log('updateUserAddressFail');
      state.loading = false;
    })
    .addCase(updateUserAddress.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(updateUserAddress.fulfilled, (state, action) => {
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