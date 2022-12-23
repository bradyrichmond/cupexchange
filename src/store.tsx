import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/User/UserSlice';
import storeReducer from './features/Stores/StoresSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    store: storeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;