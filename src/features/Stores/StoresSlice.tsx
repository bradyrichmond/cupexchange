import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API, graphqlOperation } from 'aws-amplify';
import { LazyStore, Store, Trip } from '../../models';
import { CreateStoreInput, DeleteStoreInput, UpdateStoreInput } from '../../API';
import { RootState } from '../../store';
import { getStore, listStores, listTrips } from '../../graphql/queries';
import { createStore, deleteStore, deleteTrip, updateStore } from '../../graphql/mutations';

export const getStoreData = createAsyncThunk(
    'stores/getStores',
    async () => {
      try {
        const stores = await (API.graphql(graphqlOperation(listStores)) as Promise<any>);
        return stores.data.listStores.items;
      } catch (e) {
        console.error(JSON.stringify(e));
      }
    }
);

export const createStoreMutation = createAsyncThunk(
  'stores/createStore',
  async (storeData: CreateStoreInput) => {
    return await (API.graphql(graphqlOperation(createStore, { input: storeData })) as Promise<any>);
  }
);

export const deleteStoreMutation = createAsyncThunk(
  'stores/deleteStore',
  async (deleteData: DeleteStoreInput) => {
    return await (API.graphql(graphqlOperation(deleteStore, { input: deleteData })) as Promise<any>);
  }
)

export const getSingleStoreData = createAsyncThunk(
  'stores/getSingleStoreData',
  async (id: string) => {
    const currentStore = await (API.graphql(graphqlOperation(getStore, { id })) as Promise<any>);
    return currentStore.data.getStore;
  }
)

interface StoreState {
  storeData: Array<LazyStore> | undefined
  loading: Boolean
  currentStoreData: LazyStore | undefined
}

const initialState: StoreState = {
  storeData: undefined,
  loading: false,
  currentStoreData: undefined
}

export const storesSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStoreData.rejected, (state, action) => {
        console.log('getStoreData failed');
        state.loading = false;
      })
      .addCase(getStoreData.fulfilled, (state, action) => {
        state.storeData = action.payload;
        state.loading = false;
      })
      .addCase(getStoreData.pending, (state, action) => {
        state.loading = true
      })
      .addCase(createStoreMutation.pending, (state, action) => {
        state.loading = true
      })
      .addCase(createStoreMutation.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(createStoreMutation.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(getSingleStoreData.rejected, (state, action) => {
        console.log('getSingleStoreData failed');
        state.loading = false;
      })
      .addCase(getSingleStoreData.fulfilled, (state, action) => {
        state.currentStoreData = action.payload;
        state.loading = false;
      })
      .addCase(getSingleStoreData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteStoreMutation.rejected, (state, action) => {
        console.log('deleteStoreMutation failed');
        state.loading = false;
      })
      .addCase(deleteStoreMutation.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteStoreMutation.pending, (state, action) => {
        state.loading = true;
      })
  },
});

export const selectStoreData = (state: RootState) => state.store.storeData;
export const selectCurrentStoreData = (state: RootState) => state.store.currentStoreData;

export default storesSlice.reducer;