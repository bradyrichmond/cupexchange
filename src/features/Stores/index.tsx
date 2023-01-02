import React, { useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getStoreData, selectStoreData } from './StoresSlice';
import { DataGrid, GridColDef, GridEventListener, GridRowsProp } from '@mui/x-data-grid';
import { Add } from '@mui/icons-material';
import CreateStoreForm from './CreateStoreForm';
import { selectUserCognitoGroups } from '../User/UserSlice';
import { useNavigate } from 'react-router';

const Stores = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const storeData = useAppSelector(selectStoreData);
    const userGroups = useAppSelector(selectUserCognitoGroups);
    const userIsModerator = userGroups.includes('moderators');
    
    useEffect(() => {
        dispatch(getStoreData());
    }, [])

    const rows: GridRowsProp = storeData ?? [];

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Store Name', width: 300 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'district', headerName: 'State', width: 150 },
    ];

    const handleRowClick: GridEventListener<'rowClick'> = (
        params,
        event,
        details,
      ) => {
        navigate(`/stores/${params.row.id}`);
    };

    return (
        <Box height='100%' width='100%' display='flex' flexDirection='column'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CreateStoreForm close={handleClose}/>
            </Modal>
            {userIsModerator && 
                <Box marginLeft='2rem' marginRight='2rem' marginTop='2rem'>
                    <Button onClick={handleOpen}><Add />Add Store</Button>
                </Box>
            }
            <Box margin='2rem' flex={1}>
                <DataGrid onRowClick={handleRowClick} rows={rows} columns={columns} />
            </Box>
        </Box>
    )
}

export default Stores;