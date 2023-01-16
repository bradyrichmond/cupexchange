import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API, graphqlOperation } from 'aws-amplify';
import { CreateOrderInput } from '../../API';
import { createOrder } from '../../graphql/mutations';
import { listOrders } from '../../graphql/queries';
import { Order } from '../../models';
import { RootState } from '../../store';

interface InitialState {
    loading: boolean
    outgoingOrders: (Order | undefined)[]
    incomingOrders: (Order | undefined)[]
}

const initialState: InitialState = {
  loading: false,
  outgoingOrders: [],
  incomingOrders: []
}

export const createOrderAction = createAsyncThunk(
    'orders/createOrderAction',
    async (input: CreateOrderInput) => {
        try {
            await API.graphql(graphqlOperation(createOrder, { input }));
        } catch (e) {
            console.error(JSON.stringify(e));
        }
    }
)

export const getMyOrders = createAsyncThunk<{ outgoingOrders: Order[], incomingOrders: Order[] }, string>(
    'orders/getMyOrders',
    async (userId: string) => {
        const outgoingOrders = await (API.graphql(graphqlOperation(listOrders, { filter: { buyerId: { eq: userId } } })) as Promise<any>);
        const incomingOrders = await (API.graphql(graphqlOperation(listOrders, { filter: { shipperId: { eq: userId } } })) as Promise<any>);
        return { outgoingOrders, incomingOrders };
    }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        .addCase(createOrderAction.fulfilled, (state, action) => {
            state.loading = false;
        })
        .addCase(createOrderAction.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(createOrderAction.rejected, (state, action) => {
            state.loading = false;
        })
        .addCase(getMyOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.incomingOrders = action.payload.incomingOrders;
            state.outgoingOrders = action.payload.outgoingOrders;
        })
        .addCase(getMyOrders.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getMyOrders.rejected, (state, action) => {
            state.loading = false;
        })
  }
});

export const {  } = orderSlice.actions;

export const selectIncomingOrders = (state: RootState) => state.orders.incomingOrders;
export const selectOutgoingOrders = (state: RootState) => state.orders.outgoingOrders;

export default orderSlice.reducer;