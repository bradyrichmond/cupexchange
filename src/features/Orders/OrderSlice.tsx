import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DataStore } from 'aws-amplify';
import { CreateOrderInput } from '../../API';
import { Lego, Order, OrderItem, Trip, User } from '../../models';
import { RootState } from '../../store';
import { getUserById } from '../../utils/base';

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

interface CreateOrderInputProps {
    orderInput: CreateOrderInput
    orderItems: {itemId: string, count: number}[]
}

export const createOrderAction = createAsyncThunk(
    'orders/createOrderAction',
    async (input: CreateOrderInputProps) => {
        const { tracking, numberOfCups, total, orderBuyerId, orderShipperId, orderTripId } = input.orderInput;
        const { orderItems } = input;
        const buyer = await DataStore.query(User, orderBuyerId);
        const shipper = await DataStore.query(User, orderShipperId);
        const trip = await DataStore.query(Trip, orderTripId);
        if (buyer && shipper && trip) {
            const tripData = await DataStore.save(new Order({ tracking, numberOfCups, total, orderBuyerId, orderShipperId, orderTripId, buyer, shipper, trip }));
            for (let i = 0; i < orderItems.length; i++) {
                const { itemId, count } = orderItems[i];
                const item = await DataStore.query(Lego, { id: itemId });
                if (item) {
                    DataStore.save(new OrderItem({ item, count, orderItemItemId: itemId, orderOrdersId: tripData.id }))
                }
            }
        }
    }
)

export const getMyOrders = createAsyncThunk<{ outgoingOrders: (Order | undefined)[], incomingOrders: (Order | undefined)[] }, string>(
    'orders/getMyOrders',
    async (userId: string) => {
        const incomingOrders = await DataStore.query(Order, order => order.orderShipperId.eq(userId));
        const outgoingOrders = await DataStore.query(Order, order => order.orderBuyerId.eq(userId));
        
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