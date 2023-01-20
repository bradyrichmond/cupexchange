import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Inventory, Lego } from '../../models';
import { DataStore } from 'aws-amplify';
import { RootState } from '../../store';

export const createStoreInventory = createAsyncThunk(
    'inventory/createStoreInventory',
    async (input: { lego: (string | undefined)[], storeId: string, userId: string }) => {
      const inventoryResponse = await DataStore.save(new Inventory({}));
      const inventoryResponseId = inventoryResponse.id;
      
      await Promise.all(input.lego.map(async (lego: string | undefined) => {
        if (lego) {
          return await DataStore.save(new Lego({ imageKey: lego, inventoryItemsId: inventoryResponseId }));
        }
      }));
    }
)

export const getStoreInventory = createAsyncThunk(
  'inventory/getStoreInventory',
  async (id: string) => {
    return await DataStore.query(Lego, (L) => L.inventoryItemsId.eq(id));
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
      .addCase(getStoreInventory.rejected, (state, action) => {
        console.log('getStoreInventory failed');
        state.loading = false;
      })
      .addCase(getStoreInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.currentInventory = action.payload;
      })
      .addCase(getStoreInventory.pending, (state, action) => {
        state.loading = true;
      })
  },
});

export const selectCurrentInventory = (state: RootState) => state.inventory.currentInventory;

export default storesSlice.reducer;