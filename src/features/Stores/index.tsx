import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getStoreData, selectStoreData } from './StoresSlice';
import { DataGrid, GridColDef, GridEventListener, GridRowsProp } from '@mui/x-data-grid';
import { Add } from '@mui/icons-material';
import CreateStoreForm from './CreateStoreForm';
import { selectUserCognitoGroups, selectUserData } from '../User/UserSlice';
import { useNavigate } from 'react-router';
import { DataStore } from 'aws-amplify';
import { Store, User } from '../../models';

const Stores = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const storeData = useAppSelector(selectStoreData);
    const userGroups = useAppSelector(selectUserCognitoGroups);
    const currentUser = useAppSelector(selectUserData)
    const userIsModerator = userGroups.includes('moderators');

    const fileReader = new FileReader();
    
    useEffect(() => {
        dispatch(getStoreData());
    }, [])

    const bulkAdd = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files;
        const userData = await DataStore.query(User, currentUser?.id ?? '')
        if (files && userData) {
            const file = files[0]
            fileReader.onload = function (event) {
                const csvOutput = event.target?.result;
                const stores = csvOutput?.toString().split('\n')

                if (stores) {
                    for(let i = 0; i < stores?.length; i++) {
                        const store = stores[i].split(',');
                        const city = store[0];
                        const district = store[1];
                        const storeName = store[2];
                        if (city && district && storeName) {
                            DataStore.save(new Store({ name: storeName, city, district, lastUpdateBy: userData, storeLastUpdateById: currentUser?.id ?? '' }));
                        }
                    }

                    dispatch(getStoreData());
                }
            };

            fileReader.readAsText(file);
        }
    }

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
                    <Box>
                        <input
                            type="file"
                            name="file"
                            accept=".csv"
                            style={{ display: "block", margin: "10px auto" }}
                            onChange={bulkAdd}
                        />
                    </Box>
                </Box>
            }
            <Box margin='2rem' flex={1}>
                <DataGrid onRowClick={handleRowClick} rows={rows} columns={columns} />
            </Box>
        </Box>
    )
}

export default Stores;