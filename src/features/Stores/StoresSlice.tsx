import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DataStore, Predicates } from 'aws-amplify';
import { LazyStore, Store } from '../../models';

export const getStoreData = createAsyncThunk(
    'stores/getStores',
    async () => {
      return DataStore.query(Store);
    }
)

const initialStoreData: Array<LazyStore> = [];

export const storesSlice = createSlice({
  name: 'storesData',
  initialState: {
    storeData: initialStoreData
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStoreData.rejected, (state, action) => {
        console.log('getStoreData failed')
      })
      .addCase(getStoreData.fulfilled, (state, action) => {
        state.storeData = action.payload;
      })
      .addCase(getStoreData.pending, () => {

      })   
  },
});

export default storesSlice.reducer;