import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { formatRelative, parseISO } from 'date-fns';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { InventoryItem } from '../Stores/StoreData';
import { getSingleTrip, selectCurrentTrip } from './TripsSlice';
import { addCartItem, emptyCart } from '../Orders/CartSlice';
import { getStoreInventory, selectCurrentInventory } from '../Stores/InventorySlice';
import { getStoreById, getUserById } from '../../utils/base';
import { UserType } from '../User/UserSlice';
import { StoreType } from '../Stores/StoresSlice';

let initialStore: StoreType | undefined;
let initialUser: UserType | undefined;

const TripData = () => {
    const { id } = useParams();
    const [currentStore, setCurrentStore] = useState(initialStore);
    const [shipper, setShipper] = useState(initialUser);
    const dispatch = useAppDispatch();
    const currentTrip = useAppSelector(selectCurrentTrip);
    const inventoryItems = useAppSelector(selectCurrentInventory)
    const shipperName = `${shipper?.first_name} ${shipper?.last_name}`;
    const title = `Trip to ${currentStore?.name} by ${shipperName}`;
    const relativeUpdatedAt = currentStore?.updatedAt ? formatRelative(parseISO(currentStore.updatedAt ?? ''), Date.now()) : 'loading...';

    if (currentTrip) {
        const fetchInventory = async () => {
            const fetchedStore = await getStoreById(currentTrip.tripStoreId);
            setCurrentStore(fetchedStore);
            const fetchedShipper = await getUserById(currentTrip.tripShipperId);
            setShipper(fetchedShipper);
        }

        fetchInventory();
    }
    
    useEffect(() => {
        dispatch(getStoreInventory(currentStore?.storeInventoryId ?? ''))
    }, [dispatch, currentStore])

    useEffect(() => {
        dispatch(emptyCart({}));
        dispatch(getSingleTrip(id ?? ''));
    }, [dispatch, id])

    const addToOrder = (id: string) => {
        dispatch(addCartItem(id));
    }

    return (
        <Box padding='2rem' height='100%' width='100%'>
            <Typography fontSize='3rem'>{title}</Typography>
            {inventoryItems && inventoryItems.length > 0 ? 
                <>
                    <Typography>Inventory current as of {relativeUpdatedAt}</Typography>
                    <Box display='flex' flexDirection='row'>
                        {inventoryItems && inventoryItems.map((i) => {
                            return (
                                <InventoryItem imageKey={i?.imageKey} addToOrder={addToOrder} itemId={i?.id ?? ''}/>
                            )
                        })}
                    </Box> 
                </>
            :
                <Typography>No inventory data</Typography>
            }
        </Box>
    )
}

export default TripData;

