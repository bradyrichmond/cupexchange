import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { DataGrid, GridColDef, GridEventListener, GridRowsProp } from '@mui/x-data-grid';
import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import CreateTripForm from './CreateTripForm';
import { getTrips, selectTrips } from './TripsSlice';
import { formatRelative } from 'date-fns';
import { getStoreById, getUserById } from '../../utils/base';

export interface TripType {
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
        { field: 'store', headerName: 'Store Name', width: 450 },
        { field: 'shipper', headerName: 'Shipper Name', width: 300 },
        { field: 'cupPrice', headerName: 'Cup Price', width: 300 },
        { field: 'shippingPrice', headerName: 'Shipping Price/3 Cups', width: 300 },
        { field: 'orderExpiration', headerName: 'Taking Orders Until', width: 300 },
    ];

    useEffect(() => {
        if (trips && trips.length > 0) {
            const buildTrips = async () => {
                const tripData = await Promise.all(trips.map(async (t) => {
                    const store = await getStoreById(t.tripStoreId);
                    const storeName = store?.name
                    const shipper = await getUserById(t.tripShipperId);
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
        }
    }, [trips])

    useEffect(() => {
        dispatch(getTrips(currentPage))
    }, [dispatch, currentPage])

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
                <Box>
                    <CreateTripForm close={handleClose} />
                </Box>
            </Modal>
            <Box display='flex' alignItems='center' justifyContent='center' paddingBottom='2rem'>
                <Typography fontSize='3rem' fontWeight='bold'>Upcoming Trips</Typography>
            </Box>
            <Box>
                <Button onClick={handleOpen} variant='contained'><Add />Add Trip</Button>
            </Box>
            <Box marginTop='2rem' flex={1}>
                {trips && trips.length > 0 ? 
                    <DataGrid onRowClick={handleRowClick} rows={rows} columns={columns} onPageChange={handlePageChange} style={{background: 'rgba(255, 255, 255, 255)', borderRadius: '2rem', color: 'rgba(131,133,146,255)', padding: '2rem', fontSize: '1.5rem', fontWeight: 'bold' }}/>
                    :
                    <Box>No upcoming trips scheduled</Box>
                }
            </Box>
        </Box>
    )
}

export default Stores;