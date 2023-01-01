import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DataStore, Predicates } from 'aws-amplify';
import { Trip } from '../../models';
import { CreateStoreInput } from '../../API';
import { RootState } from '../../store';

export const getTrips = createAsyncThunk(
    'trips/getTrips',
    async (page: number) => {
      return await DataStore.query(Trip, Predicates.ALL, { page, limit: 50});
    }
);

interface TripsState {
  loading: Boolean
  trips: Trip[]
}

const initialState: TripsState = {
  loading: false,
  trips: []
}

export const storesSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrips.rejected, (state, action) => {
        console.log('getTrips failed');
        state.loading = false;
      })
      .addCase(getTrips.fulfilled, (state, action) => {
        state.loading = false;
        state.trips = action.payload;
      })
      .addCase(getTrips.pending, (state, action) => {
        state.loading = true;
      })
  },
});

export const selectTrips = (state: RootState) => state.trips.trips;

export default storesSlice.reducer;