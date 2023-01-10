import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createInventory, updateStore } from '../../graphql/mutations';
import { Lego } from '../../models';
import { API, graphqlOperation } from 'aws-amplify';

interface StoreInventoryInput {
    storeId: string
    items: string[]
}

export const createStoreInventory = createAsyncThunk(
    'inventory/createStoreInventory',
    async (input: StoreInventoryInput) => {
        const { items, storeId } = input;

        const inventoryResponse = API.graphql(graphqlOperation(createInventory, { items }));
        
        API.graphql(graphqlOperation(updateStore, { inventory: inventoryResponse, id: storeId }))
    }
)

interface StoreState {
  loading: Boolean
  currentInventory: (Lego | undefined)[] | undefined;
}

const initialState: StoreState = {
  loading: false,
  currentInventory: undefined
}

export const storesSlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStoreInventory.rejected, (state, action) => {
        console.log('createStoreInventory failed');
        state.loading = false;
      })
      .addCase(createStoreInventory.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createStoreInventory.pending, (state, action) => {
        state.loading = true;
      })
  },
});

export default storesSlice.reducer;