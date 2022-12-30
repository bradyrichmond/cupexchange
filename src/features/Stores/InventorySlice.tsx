import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DataStore } from 'aws-amplify';
import { Inventory, LazyInventory, LazyStore, Lego, Store } from '../../models';
import { RootState } from '../../store';

interface StoreInventoryInput {
    storeId: string
    items: string[]
}

export const getStoreInventory = createAsyncThunk(
  'inventory/getStoreInventory',
  async (id: string) => {
    const inventory = await DataStore.query(Inventory, id);
    const itemIds = inventory?.items ?? [];

    let itemArray: (Lego | undefined)[] = []

    for (let i = 0; i < itemIds?.length; i++) {
      const currentItem = await DataStore.query(Lego, itemIds[i]);
      itemArray.push(currentItem);
    }

    return itemArray;
  }
)

export const createStoreInventory = createAsyncThunk(
    'inventory/createStoreInventory',
    async (input: StoreInventoryInput) => {
        const { items, storeId } = input;

        const inventory = await DataStore.save(new Inventory({ items }))

        const original = await DataStore.query(Store, storeId);
        if (original) {
            await DataStore.save(
                Store.copyOf(original, updated => {
                    updated.inventoryId = inventory.id;
                })
            );
        }
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

export const selectCurrentStoreInventory = (state: RootState) => state.inventory.currentInventory;

export default storesSlice.reducer;