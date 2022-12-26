import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DataStore } from 'aws-amplify';
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
);

export const getSingleStoreData = createAsyncThunk(
  'stores/getSingleStoreData',
  async ( id: string ) => {
    return DataStore.query(Store, id);
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
      .addCase(createStore.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(createStore.fulfilled, (state, action) => {
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
  },
});

export const selectStoreData = (state: RootState) => state.store.storeData;
export const selectCurrentStoreData = (state: RootState) => state.store.currentStoreData;

export default storesSlice.reducer;