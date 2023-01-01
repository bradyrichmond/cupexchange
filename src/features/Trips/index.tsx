import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { DataGrid, GridColDef, GridEventListener, GridRowsProp } from '@mui/x-data-grid';
import { Add } from '@mui/icons-material';
import { selectUserCognitoGroups } from '../User/UserSlice';
import { useNavigate } from 'react-router';

const Stores = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const rows: GridRowsProp = [{ name: 'Test Store', city: 'Test City', district: 'Test State', shipper: 'Test Shipper', cupPrice: '$18.00', shippingPrice: '$10.00', orderExpiration: '', id: 'TESTID'}];

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Store Name', width: 300 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'district', headerName: 'State', width: 150 },
        { field: 'shipper', headerName: 'Shipper Name', width: 150 },
        { field: 'cupPrice', headerName: 'Cup Price', width: 150 },
        { field: 'shippingPrice', headerName: 'Shipping Price/3 Cups', width: 200 },
        { field: 'orderExpiration', headerName: 'Taking Orders Until', width: 200 },
    ];

    const handleRowClick: GridEventListener<'rowClick'> = (
        params,
        event,
        details,
      ) => {
        navigate(`/stores/${params.row.id}`);
    };

    return (
        <Box height='100%' width='100%' display='flex' flexDirection='column' padding='2rem'>
            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CreateTripForm />
            </Modal> */}
            <Box>
                <Typography fontSize='3rem'>Upcoming Trips</Typography>
            </Box>
            <Box>
                <Button onClick={handleOpen}><Add />Add Trip</Button>
            </Box>
            <Box marginTop='2rem' flex={1}>
                <DataGrid onRowClick={handleRowClick} rows={rows} columns={columns} />
            </Box>
        </Box>
    )
}

export default Stores;