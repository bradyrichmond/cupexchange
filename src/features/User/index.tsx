import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUsers, selectUsers } from './UserSlice';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

const Users = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers)
    
    useEffect(() => {
        dispatch(getUsers());
    }, [])

    const rows: GridRowsProp = users ?? [];

    const columns: GridColDef[] = [
        { field: 'first_name', headerName: 'First Name', width: 300 },
        { field: 'last_name', headerName: 'Last Name', width: 150 },
        { field: 'banned', headerName: 'Banned?', width: 150 }
    ];

    return (
        <Box height='100%' width='100%' padding='2rem'>
            <DataGrid columns={columns} rows={rows} />
        </Box>
    )
}

export default Users;