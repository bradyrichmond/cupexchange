import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface CartItem {
    itemId: string
    count: number
}

interface InitialState {
    loading: boolean
    cartItems: CartItem[]
}

const initialState: InitialState = {
  loading: false,
  cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
        const currentCartItems = state.cartItems;
        if (currentCartItems.find((item) => item.itemId === action.payload)) {
          const currentCartItems = state.cartItems.filter((item) => item.itemId !== action.payload);
          const newCartItem = { itemId: action.payload.itemId ?? '', count: 1 };
          currentCartItems.push(newCartItem);
          state.cartItems = currentCartItems;
        } else {
          const item = { itemId: action.payload, count: 1 }
          currentCartItems.push(item);
          state.cartItems = currentCartItems;
        }
    },
    removeCartItem: (state, action) => {
        const currentCartItems = state.cartItems.filter((item) => item.itemId !== action.payload);
        state.cartItems = currentCartItems ?? [];
    },
    emptyCart: (state, action) => {
        state.cartItems = [];
    },
    updateItem: (state, action) => {
      try {
        const currentCartItems = state.cartItems.filter((item) => item.itemId !== action.payload.itemId);
        const newCartItem = { itemId: action.payload.itemId ?? '', count: action.payload.itemCount };
        currentCartItems.push(newCartItem);
        state.cartItems = currentCartItems;
      } catch (e) {
        console.error(JSON.stringify(e));
      }
    }
  },
});

export const { addCartItem, removeCartItem, emptyCart, updateItem } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;