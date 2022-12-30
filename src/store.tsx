import { configureStore } from '@reduxjs/toolkit'
import inventoryReducer from './features/Stores/InventorySlice';
import userReducer from './features/User/UserSlice';
import storeReducer from './features/Stores/StoresSlice';

const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    user: userReducer,
    store: storeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;