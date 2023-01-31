import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import cartReducer from './features/Orders/CartSlice';
import inventoryReducer from './features/Stores/InventorySlice';
import ordersReducer from './features/Orders/OrderSlice';
import tripsReducer from './features/Trips/TripsSlice';
import userReducer from './features/User/UserSlice';
import storeReducer from './features/Stores/StoresSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    inventory: inventoryReducer,
    orders: ordersReducer,
    trips: tripsReducer,
    user: userReducer,
    store: storeReducer
  });

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];

export default setupStore;