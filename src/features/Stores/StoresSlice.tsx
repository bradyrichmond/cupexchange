import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DataStore, Predicates } from 'aws-amplify';
import { LazyStore, Store } from '../../models';
import { CreateStoreInput } from '../../API';
import { RootState } from '../../store';

export const getStoreData = createAsyncThunk(
    'stores/getStores',
    async () => {
      return DataStore.query(Store);
    }
);

export const createStore = createAsyncThunk(
  'stores/createStore',
  async (storeData: CreateStoreInput) => {
    const { name, city, district } = storeData;
    DataStore.save(new Store({ name, city, district }));
  }
)

const initialStoreData: Array<LazyStore> = [];

export const storesSlice = createSlice({
  name: 'stores',
  initialState: {
    storeData: initialStoreData,
    loading: false
  },
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
      .addCase(createStore.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(createStore.fulfilled, (state, action) => {
        state.loading = false;
      })
  },
});

export const selectStoreData = (state: RootState) => state.store.storeData;

export default storesSlice.reducer;