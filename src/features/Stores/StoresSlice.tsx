import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DataStore } from 'aws-amplify';

// const getStoreData = createAsyncThunk(
//     'stores/getStores',
//     async () => {
//         try {
//             DataStore.query()
//         }
//         catch {

//         }
//     }
// )

export const storesSlice = createSlice({
  name: 'storesData',
  initialState: {
    storeData: []
  },
  reducers: {
    setStoreData: (state, action) => {
        state.storeData = action.payload
    }
  },
  extraReducers: {
      
  },
});

export const { setStoreData } = storesSlice.actions;

export default storesSlice.reducer;