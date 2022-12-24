import React from 'react';
import { Box } from '@mui/material';
import { useAppDispatch } from '../../hooks';
import { getStoreData } from './StoresSlice';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

const Stores = () => {
    const dispatch = useAppDispatch();
    dispatch(getStoreData());

    const rows: GridRowsProp = [
        { id: 1, storeName: 'Test 1', city: 'City 1', state: 'State 1' },
        { id: 2, storeName: 'Test 2', city: 'City 2', state: 'State 2' },
        { id: 3, storeName: 'Test 3', city: 'City 3', state: 'State 3' },
    ];

    const columns: GridColDef[] = [
        { field: 'storeName', headerName: 'Store Name', width: 150 },
        { field: 'state', headerName: 'State', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
    ];

    return (
        <Box height='100%' width='100%'>
            <DataGrid rows={rows} columns={columns} />
        </Box>
    )
}

export default Stores;