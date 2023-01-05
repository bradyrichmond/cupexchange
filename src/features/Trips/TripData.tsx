import { Box, Typography } from '@mui/material';
import { formatRelative, parseISO } from 'date-fns';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getStoreInventory, selectCurrentStoreInventory } from '../Stores/InventorySlice';
import { InventoryItem } from '../Stores/StoreData';
import { getSingleStoreData, selectCurrentStoreData } from '../Stores/StoresSlice';
import { getUserById, selectUserById } from '../User/UserSlice';
import { getSingleTrip, selectCurrentTrip } from './TripsSlice';

const TripData = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const currentTrip = useAppSelector(selectCurrentTrip);
    const storeData = useAppSelector(selectCurrentStoreData);
    const storeName = storeData?.name;
    const shipper = useAppSelector(selectUserById);
    const shipperName = `${shipper?.first_name} ${shipper?.last_name}`;
    const title = `Trip to ${storeName} by ${shipperName}`;
    const inventory = useAppSelector(selectCurrentStoreInventory);
    const relativeUpdatedAt = storeData?.updatedAt ? formatRelative(parseISO(storeData?.updatedAt), Date.now()) : 'loading...';

    useEffect(() => {
        dispatch(getSingleTrip(id ?? ''));
    }, [])

    useEffect(() => {
        const getTripData = async () => {
            await dispatch(getSingleStoreData(currentTrip?.store ?? ''));
            await dispatch(getUserById(currentTrip?.shipper ?? ''));
            await dispatch(getStoreInventory(storeData?.inventoryId ?? ''));
        }

        getTripData();
    }, [currentTrip])

    return (
        <Box padding='2rem' height='100%' width='100%'>
            <Typography fontSize='3rem'>{title}</Typography>
            <Typography>Inventory current as of {relativeUpdatedAt}</Typography>
            <Box display='flex' flexDirection='row'>
                {inventory && inventory.map((i) => {
                    return (
                        <InventoryItem imageKey={i?.imageKey} />
                    )
                })}
            </Box>
        </Box>
    )
}

export default TripData;