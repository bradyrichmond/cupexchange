import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DataStore, Predicates } from 'aws-amplify';
import { Trip } from '../../models';
import { CreateTripInput } from '../../API';
import { RootState } from '../../store';

export const getTrips = createAsyncThunk(
    'trips/getTrips',
    async (page: number) => {
      return await DataStore.query(Trip, (t) => t.orderExpiration.gt(Date.now()), { page, limit: 50});
    }
);

export const getSingleTrip = createAsyncThunk(
  'trips/getSingleTrip',
  async (id: string) => {
    return await DataStore.query(Trip, id);
  }
)

export const createTrip = createAsyncThunk(
  'trips/createTrip',
  async (input: CreateTripInput) => {
    const { store, shipper, cupPrice, shippingPrice, orderExpiration } = input;
    await DataStore.save(new Trip({ store, shipper, cupPrice, shippingPrice, orderExpiration }));
  }
)

interface TripsState {
  loading: Boolean
  trips: Trip[]
  currentTrip: Trip | undefined
}

const initialState: TripsState = {
  loading: false,
  trips: [],
  currentTrip: undefined
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
      .addCase(getSingleTrip.rejected, (state, action) => {
        console.log('getSingleTrip failed', JSON.stringify(action));
        state.loading = false;
      })
      .addCase(getSingleTrip.fulfilled, (state, action) => {
        state.loading = false;
        state.currentTrip = action.payload
      })
      .addCase(getSingleTrip.pending, (state, action) => {
        state.loading = true;
      })
  },
});

export const selectTrips = (state: RootState) => state.trips.trips;
export const selectCurrentTrip = (state: RootState) => state.trips.currentTrip;

export default storesSlice.reducer;