import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { LazyStore, Store, Trip, User } from '../../models';
import { RootState } from '../../store';

export const getStoreData = createAsyncThunk(
    'stores/getStores',
    async () => {
      return await DataStore.query(Store, Predicates.ALL, {
        sort: s => s.name(SortDirection.ASCENDING)
      });
    }
);

interface CreateStoreInput {
  name: string
  district: string
  city: string
  storeLastUpdateById: string
  lastUpdateBy: User
}

export const createStoreMutation = createAsyncThunk(
  'stores/createStore',
  async (storeData: CreateStoreInput) => {
    const { name, district, city, storeLastUpdateById, lastUpdateBy } = storeData;
    return await DataStore.save(new Store({ name, district, city, storeLastUpdateById, lastUpdateBy }));
  }
);

export const deleteStoreMutation = createAsyncThunk(
  'stores/deleteStore',
  async (id: string) => {
    return await DataStore.delete(Store, id)
  }
)

export const getSingleStoreData = createAsyncThunk(
  'stores/getSingleStoreData',
  async (id: string) => {
    return await DataStore.query(Store, id);
  }
)

interface StoreState {
  storeData?: Array<LazyStore>
  loading: Boolean
  currentStoreData?: LazyStore
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