import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DataStore } from 'aws-amplify';
import { CreateOrderInput } from '../../API';
import { Lego, Order, OrderItem, Trip, User } from '../../models';
import { RootState } from '../../store';
import { TripType } from '../Trips/TripsSlice';
import { UserType } from '../User/UserSlice';

export interface OrderType {
    id: string,
    total: number,
    orderBuyerId: string,
    orderShipperId: string,
    tracking: (string | null)[],
    orderTripId: string,
    buyer: Promise<UserType>,
    shipper: Promise<UserType>,
    trip: Promise<TripType>,
    createdAt: string
}

interface InitialState {
    loading: boolean
    outgoingOrders: (OrderType | undefined)[]
    incomingOrders: (OrderType | undefined)[]
}

const initialState: InitialState = {
  loading: false,
  outgoingOrders: [],
  incomingOrders: []
}

interface CreateOrderInputProps {
    orderInput: CreateOrderInput
    orderItems: { itemId: string, count: number }[]
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

const mapOrders = async (orders?: Order[]): Promise<OrderType[]>  => {
    if (orders){
        const orderList = [];
        for (let i = 0; i < orders.length; i++) {
            const order = orders[i];

            const buyer = order?.buyer;
            const shipper = order?.shipper;
            const trip = order?.trip;

            if (order) {
                   orderList.push({
                    id: order?.id ?? '',
                    total: order?.total ?? 0,
                    orderBuyerId: order?.orderBuyerId ?? '',
                    orderShipperId: order?.orderShipperId ?? '',
                    tracking: order?.tracking ?? [],
                    orderTripId: order?.orderTripId ?? '',
                    buyer,
                    shipper,
                    trip,
                    createdAt: order?.createdAt ?? ''
                })
            }
        }

        return orderList;
    }

    return [];
}

export const getMyOrders = createAsyncThunk<{ outgoingOrders: (OrderType | undefined)[], incomingOrders: (OrderType | undefined)[] }, string>(
    'orders/getMyOrders',
    async (userId: string) => {
        const incomingOrdersData = await DataStore.query(Order, order => order.orderShipperId.eq(userId));
        const outgoingOrdersData = await DataStore.query(Order, order => order.orderBuyerId.eq(userId));
        const incomingOrders = await mapOrders(incomingOrdersData);
        const outgoingOrders = await mapOrders(outgoingOrdersData);
        
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

export const selectIncomingOrders = (state: RootState) => state.orders.incomingOrders;
export const selectOutgoingOrders = (state: RootState) => state.orders.outgoingOrders;

export default orderSlice.reducer;