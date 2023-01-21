import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DataStore, SortDirection } from 'aws-amplify';
import { Store, Trip, User } from '../../models';
import { RootState } from '../../store';

export const getTrips = createAsyncThunk(
    'trips/getTrips',
    async (page: number) => {
      const trips = await DataStore.query(Trip, t => t.orderExpiration.gt(Date.now()), {
        sort: t => t.orderExpiration(SortDirection.ASCENDING)
      });

      return trips.map(t => { 
        return {
          id: t.id,
          cupPrice: t.cupPrice,
          shippingPrice: t.shippingPrice,
          maximumCups: t.maximumCups,
          createdAt: t.createdAt,
          updatedAt: t.updatedAt,
          tripStoreId: t.tripStoreId,
          tripShipperId: t.tripShipperId,
          orderExpiration: t.orderExpiration
        }
      });
    }
);

interface TripType {
  id: string
  cupPrice: string
  shippingPrice: string
  maximumCups?: number | null
  createdAt?: string | null
  updatedAt?: string | null
  tripStoreId: string
  tripShipperId: string
  orderExpiration: number
}

export const getSingleTrip = createAsyncThunk(
  'trips/getSingleTrip',
  async (tripId: string) => {
    const tripData = await DataStore.query(Trip, tripId);
    if (tripData) {
      const { id, cupPrice, shippingPrice, maximumCups, createdAt, updatedAt, tripStoreId, tripShipperId, orderExpiration } = tripData;
      return { id, cupPrice, shippingPrice, maximumCups, createdAt, updatedAt, tripStoreId, tripShipperId, orderExpiration };
    }
  }
);

interface CreateTripInput {
  tripStoreId: string
  tripShipperId: string
  cupPrice: string
  shippingPrice: string
  orderExpiration: number
  store: string
  shipper?: User
  maximumCups: number
}

export const createTripMutation = createAsyncThunk(
  'trips/createTrip',
  async (input: CreateTripInput) => {
    const { tripStoreId, tripShipperId, cupPrice, shippingPrice, orderExpiration, store, shipper } = input;
    const storeData = await DataStore.query(Store, { id:  store ?? '' });
    if (storeData && shipper) {
      await DataStore.save(new Trip({ tripStoreId, tripShipperId, cupPrice, shippingPrice, orderExpiration, store: storeData, shipper }));
    }
  }
);

interface TripsState {
  loading: Boolean
  trips: TripType[]
  currentTrip: TripType | undefined
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
      .addCase(createTripMutation.rejected, (state, action) => {
        console.log('createTrip failed');
        state.loading = false;
      })
      .addCase(createTripMutation.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createTripMutation.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getSingleTrip.rejected, (state, action) => {
        console.log('getSingleTrip failed');
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