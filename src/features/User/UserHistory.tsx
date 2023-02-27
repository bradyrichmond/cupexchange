import React, { useEffect, useState } from 'react'
import { Box, Card, Typography } from "@mui/material";
import { getOrdersForUser, getTripsForUser } from '../../utils/base';
import { Trip } from '../../models';
import { DataGrid, GridColDef, GridEventListener, GridRowsProp } from '@mui/x-data-grid';
import { formatRelative, parseISO } from 'date-fns';
import { Order } from '../../API';
import { useNavigate } from 'react-router';

interface UserHistoryProps {
    userId: string
}

const UserHistory = (props: UserHistoryProps) => {
    const { userId } = props;

    return (
        <Box flex='1' display='flex' flexDirection='column'>
            <Box display='flex' justifyContent='center' alignItems='center' paddingBottom='3rem'>
                <Typography variant='h2'>History</Typography>
            </Box>
            <Box display='flex' flexDirection='row' flex='1'>
                <UserOrderHistory userId={userId} />
                <UserTripHistory userId={userId} />
            </Box>
        </Box>
    )
}

interface UserOrderHistoryProps {
    userId: string
}

interface MorphedOrder {
    id: string
    storeName: string
    numberOfCups: number
    createdAt: string
}

let initialOrders: MorphedOrder[];

const UserOrderHistory = (props: UserOrderHistoryProps) => {
    const { userId } = props;
    const [orders, setOrders] = useState(initialOrders);
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const fetchedOrders = await getOrdersForUser(userId);
            const morphedOrders = await Promise.all(fetchedOrders.map(async (o) => {
                const createdAt = formatRelative(parseISO(o.createdAt ?? ''), Date.now());
                const trip = await o.trip;
                const store = await trip.store;
                const storeName = store.name;

                return {
                    id: o.id,
                    storeName,
                    numberOfCups: o.numberOfCups,
                    createdAt
                }
            }));

            setOrders(morphedOrders);
        }

        getOrders();
    }, [userId])

    const orderRows: GridRowsProp = orders ?? [];

    const orderColumns: GridColDef[] = [
        { field: 'storeName', headerName: 'Store Name', width: 450 },
        { field: 'createdAt', headerName: 'Trip Date', width: 250 },
        { field: 'numberOfCups', headerName: '# of cups', width: 250 },
    ];

    const handleRowClick: GridEventListener<'rowClick'> = (
        params,
        event,
        details,
    ) => {
        navigate(`/orders/${params.row.id}`);
    }

    return (
        <Box flex='1' display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
            <Typography variant='h3'>User Order History</Typography>
            <DataGrid onRowClick={handleRowClick} rows={orderRows} columns={orderColumns} style={{background: 'rgba(255, 255, 255, 255)', borderRadius: '2rem', color: 'rgba(131,133,146,255)', padding: '2rem', fontSize: '1.5rem', fontWeight: 'bold', width: '90%' }}/>
        </Box>
    )
}

interface UserTripHistoryProps {
    userId: string
}

interface MorphedTrips {
    id: string
    storeName: string
    createdAt: string
}

let initialTrips: MorphedTrips[];

const UserTripHistory = (props: UserTripHistoryProps) => {
    const { userId } = props;
    const [trips, setTrips] = useState(initialTrips);
    const navigate = useNavigate();

    const tripRows: GridRowsProp = trips ?? [];

    const tripColumns: GridColDef[] = [
        { field: 'storeName', headerName: 'Store Name', width: 450 },
        { field: 'createdAt', headerName: 'Trip Date', width: 450 },
    ];

    useEffect(() => {
        const getTrips = async () => {
            const fetchedTrips = await getTripsForUser(userId);
            const morphedTrips = await Promise.all(fetchedTrips.map(async (t: Trip) => {
                const createdAt = formatRelative(parseISO(t.createdAt ?? ''), Date.now());
                const store = await t.store;
                const storeName = store.name;

                return {
                    id: t.id,
                    storeName,
                    createdAt
                }
            }));

            setTrips(morphedTrips);
        }

        getTrips();
    }, [userId])

    const handleRowClick: GridEventListener<'rowClick'> = (
        params,
        event,
        details,
    ) => {
        navigate(`/orders/${params.row.id}`);
    }

    return (
        <Box flex='1' display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
            <Typography variant='h3'>User Trip History</Typography>
            <DataGrid onRowClick={handleRowClick} rows={tripRows} columns={tripColumns} style={{background: 'rgba(255, 255, 255, 255)', borderRadius: '2rem', color: 'rgba(131,133,146,255)', padding: '2rem', fontSize: '1.5rem', fontWeight: 'bold', width: '90%' }}/>
        </Box>
    )
}

export default UserHistory;