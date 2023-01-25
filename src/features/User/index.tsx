import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUsers, selectUsers } from './UserSlice';
import { DataGrid, GridColDef, GridEventListener, GridRowsProp } from '@mui/x-data-grid';
import { useNavigate } from 'react-router';

const Users = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers);
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(getUsers());
    }, [])

    const rows: GridRowsProp = users ?? [];

    const columns: GridColDef[] = [
        { field: 'first_name', headerName: 'First Name', width: 300 },
        { field: 'last_name', headerName: 'Last Name', width: 150 },
        { field: 'banned', headerName: 'Banned?', width: 150 }
    ];

    const handleRowClick: GridEventListener<'rowClick'> = (
        params,
        event,
        details,
      ) => {
        navigate(`/users/${params.row.id}`);
    };

    return (
        <Box height='100%' width='100%' display='flex' flexDirection='column' padding='2rem'>
            <Box display='flex' justifyContent='center' alignItems='center' paddingBottom='2rem'><Typography variant='h3'>User Management</Typography></Box>
            <DataGrid columns={columns} rows={rows} onRowClick={handleRowClick} style={{background: 'rgba(255, 255, 255, 255)', borderRadius: '2rem', color: 'rgba(131,133,146,255)', padding: '2rem', fontSize: '1.5rem', fontWeight: 'bold' }}/>
        </Box>
    )
}

export default Users;