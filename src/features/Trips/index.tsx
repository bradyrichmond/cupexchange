import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { DataGrid, GridColDef, GridEventListener, GridRowsProp } from '@mui/x-data-grid';
import { Add } from '@mui/icons-material';
import { selectUserCognitoGroups } from '../User/UserSlice';
import { useNavigate } from 'react-router';
import CreateTripForm from './CreateTripForm';
import { getTrips, selectTrips } from './TripsSlice';
import { LazyStore, LazyUser, Trip, User } from '../../models';
import { DataStore } from 'aws-amplify';
import { Store } from '../../models';
import { formatRelative } from 'date-fns';

interface TripType {
    shipper: string | undefined;
    store: string | undefined;
    shippingPrice: string;
    cupPrice: string;
    orderExpiration: string;
    id: string;
}

const Stores = () => {
    const initialTripData: TripType[] = [];
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [tripData, setTripData] = useState(initialTripData);
    const handleOpen = () => setOpen(true);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const trips = useAppSelector(selectTrips);

    const rows: GridRowsProp = tripData;

    const columns: GridColDef[] = [
        { field: 'store', headerName: 'Store Name', width: 300 },
        { field: 'shipper', headerName: 'Shipper Name', width: 150 },
        { field: 'cupPrice', headerName: 'Cup Price', width: 150 },
        { field: 'shippingPrice', headerName: 'Shipping Price/3 Cups', width: 200 },
        { field: 'orderExpiration', headerName: 'Taking Orders Until', width: 200 },
    ];

    useEffect(() => {
        const buildTrips = async () => {
            const tripData = await Promise.all(trips.map(async (t) => {
                const store = await DataStore.query(Store, t.store);
                const shipper = await DataStore.query(User, t.shipper);
                const storeName = store?.name;
                const shipperName = `${shipper?.first_name} ${shipper?.last_name}`;
                return {
                    ...t,
                    shipper: shipperName,
                    store: storeName,
                    orderExpiration: formatRelative(t.orderExpiration, Date.now())
                }
            }))
            setTripData(tripData);
        }

        buildTrips();
    }, trips)

    useEffect(() => {
        dispatch(getTrips(currentPage))
    })

    const handleRowClick: GridEventListener<'rowClick'> = (
        params,
        event,
        details,
      ) => {
        navigate(`/upcoming/${params.row.id}`);
    };

    const handleClose = async () => {
        setOpen(false);
        await setCurrentPage(0);
    }

    const handlePageChange = async (page: number) => {
        await setCurrentPage(page);
        await dispatch(getTrips(currentPage));
    }

    return (
        <Box height='100%' width='100%' display='flex' flexDirection='column' padding='2rem'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CreateTripForm close={handleClose} />
            </Modal>
            <Box>
                <Typography fontSize='3rem'>Upcoming Trips</Typography>
            </Box>
            <Box>
                <Button onClick={handleOpen}><Add />Add Trip</Button>
            </Box>
            <Box marginTop='2rem' flex={1}>
                <DataGrid onRowClick={handleRowClick} rows={rows} columns={columns} onPageChange={handlePageChange}/>
            </Box>
        </Box>
    )
}

export default Stores;