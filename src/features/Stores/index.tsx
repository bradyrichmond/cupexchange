import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getStoreData, selectStoreData } from './StoresSlice';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Add } from '@mui/icons-material';
import CreateStoreForm from './CreateStoreForm';

const Stores = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useAppDispatch();
    const storeData = useAppSelector(selectStoreData);
    
    useEffect(() => {
        dispatch(getStoreData());
    }, [])

    const rows: GridRowsProp = storeData;

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Store Name', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'district', headerName: 'State', width: 150 },
    ];

    return (
        <Box height='100%' width='100%' display='flex' flexDirection='column'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CreateStoreForm />
            </Modal>
            <Box marginLeft='2rem' marginRight='2rem' marginTop='2rem'>
                <Button onClick={handleOpen}><Add />Add Store</Button>
            </Box>
            <Box margin='2rem' flex={1}>
                <DataGrid rows={rows} columns={columns} />
            </Box>
        </Box>
    )
}

export default Stores;