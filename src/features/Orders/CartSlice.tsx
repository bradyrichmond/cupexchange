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
        const item = { itemId: action.payload, count: 1}
        currentCartItems.push(item);
        state.cartItems = currentCartItems;
    },
    removeCartItem: (state, action) => {
        const currentCartItems = state.cartItems.filter((item) => item.itemId !== action.payload);
        state.cartItems = currentCartItems;
    },
    emptyCart: (state, action) => {
        state.cartItems = [];
    },
    updateItem: (state, action) => {
        const updatingCartItem = state.cartItems.find((item) => item.itemId === action.payload.itemId);
        const filteredCartItems = state.cartItems.filter((item) => item.itemId !== action.payload.itemId);
        const newCartItem = { itemId: updatingCartItem?.itemId ?? '', count: action.payload.count }
        filteredCartItems.push(newCartItem);
        state.cartItems = filteredCartItems;
    }
  },
});

export const { addCartItem, removeCartItem, emptyCart, updateItem } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;