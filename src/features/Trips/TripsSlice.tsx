import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DataStore, Predicates } from 'aws-amplify';
import { Trip } from '../../models';
import { CreateTripInput } from '../../API';
import { RootState } from '../../store';

export const getTrips = createAsyncThunk(
    'trips/getTrips',
    async (page: number) => {
      return await DataStore.query(Trip, Predicates.ALL, { page, limit: 50});
    }
);

export const createTrip = createAsyncThunk(
  'trips/createTrip',
  async (input: CreateTripInput) => {
    const { store, shipper, cupPrice, shippingPrice, orderExpiration } = input;
    await DataStore.save(new Trip({ store, shipper, cupPrice, shippingPrice, orderExpiration: `${orderExpiration}` }));
  }
)

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
      .addCase(createTrip.rejected, (state, action) => {
        console.log('createTrip failed', JSON.stringify(action));
        state.loading = false;
      })
      .addCase(createTrip.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createTrip.pending, (state, action) => {
        state.loading = true;
      })
  },
});

export const selectTrips = (state: RootState) => state.trips.trips;

export default storesSlice.reducer;