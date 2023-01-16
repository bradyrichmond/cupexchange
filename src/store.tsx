import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/Orders/CartSlice';
import inventoryReducer from './features/Stores/InventorySlice';
import ordersReducer from './features/Orders/OrderSlice';
import tripsReducer from './features/Trips/TripsSlice';
import userReducer from './features/User/UserSlice';
import storeReducer from './features/Stores/StoresSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    inventory: inventoryReducer,
    orders: ordersReducer,
    trips: tripsReducer,
    user: userReducer,
    store: storeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;