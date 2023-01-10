import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API, graphqlOperation } from 'aws-amplify';
import { Trip } from '../../models';
import { CreateTripInput } from '../../API';
import { RootState } from '../../store';
import { createTrip } from '../../graphql/mutations';
import { getStore, getTrip, getUser, listTrips } from '../../graphql/queries';

export const getTrips = createAsyncThunk(
    'trips/getTrips',
    async (page: number) => {
      const trips = await (API.graphql(graphqlOperation(listTrips, {
        filter: {
            orderExpiration: {
                gt: Date.now()
            }
          }
        })
      ) as Promise<any>);
      
      return trips.data.listTrips.items;
    }
);

export const getSingleTrip = createAsyncThunk(
  'trips/getSingleTrip',
  async (id: string) => {
    const trip = await (API.graphql(graphqlOperation(getTrip, { id })) as Promise<any>);
    return trip.data.getTrip;
  }
)

export const createTripMutation = createAsyncThunk(
  'trips/createTrip',
  async (input: CreateTripInput) => {
    const { tripStoreId, tripShipperId, cupPrice, shippingPrice, orderExpiration } = input;
    await (API.graphql(graphqlOperation(createTrip, { input: { tripStoreId, tripShipperId, cupPrice, shippingPrice, orderExpiration } })) as Promise<any>);
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
      .addCase(createTripMutation.rejected, (state, action) => {
        console.log('createTrip failed', JSON.stringify(action));
        state.loading = false;
      })
      .addCase(createTripMutation.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createTripMutation.pending, (state, action) => {
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