import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Lego } from '../../models';
import { API, graphqlOperation } from 'aws-amplify';
import { createInventory, createLego, updateStore } from '../../graphql/mutations';
import { CreateLegoInput, UpdateStoreInput } from '../../API';
import { listLegos } from '../../graphql/queries';
import { RootState } from '../../store';

export const createStoreInventory = createAsyncThunk(
    'inventory/createStoreInventory',
    async (input: { lego: (string | undefined)[], storeId: string, userId: string }) => {
      const inventoryResponse = await (API.graphql(graphqlOperation(createInventory, { input: { } })) as Promise<any>);
      const inventoryResponseId = inventoryResponse.data.createInventory.id;

      await Promise.all(input.lego.map(async (lego: string | undefined) => {
        if (lego) {
          return await (API.graphql(graphqlOperation(createLego, { input: { imageKey: lego ?? '', inventoryItemsId: inventoryResponseId } })) as Promise<any>);
        }
      }));

      await (API.graphql(graphqlOperation(updateStore, { input: { storeInventoryId: inventoryResponseId, id: input.storeId, storeLastUpdateById: input.userId} })) as Promise<any>);
    }
)

export const getStoreInventory = createAsyncThunk(
  'inventory/getStoreInventory',
  async (id: string) => {
    const fetchedLego = await (API.graphql(graphqlOperation(listLegos, { filter: { inventoryItemsId: { eq: id } } })) as Promise<any>);
    return fetchedLego.data.listLegos.items;
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