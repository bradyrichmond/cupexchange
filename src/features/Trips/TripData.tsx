import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { formatRelative, parseISO } from 'date-fns';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { InventoryItem } from '../Stores/StoreData';
import { getSingleTrip, selectCurrentTrip } from './TripsSlice';
import { addCartItem, emptyCart } from '../Orders/CartSlice';
import { Inventory, Lego, Store, User } from '../../models';

let initialInventory: Inventory | undefined;
let initialInventoryItems: Lego[] | undefined;
let initialStore: Store | undefined;
let initialUser: User | undefined;

const TripData = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState(initialInventory);
    const [inventoryItems, setInventoryItems] = useState(initialInventoryItems);
    const [currentStore, setCurrentStore] = useState(initialStore);
    const [shipper, setShipper] = useState(initialUser);
    const dispatch = useAppDispatch();
    const currentTrip = useAppSelector(selectCurrentTrip);
    const shipperName = `${shipper?.first_name} ${shipper?.last_name}`;
    const title = `Trip to ${currentStore?.name} by ${shipperName}`;
    const relativeUpdatedAt = inventory ? formatRelative(parseISO(inventory.createdAt ?? ''), Date.now()) : 'loading...';

    if (currentTrip) {
        const fetchInventory = async () => {
            const fetchedStore = await currentTrip.store;
            setCurrentStore(fetchedStore);
            const fetchedInventory = await fetchedStore.inventory;
            if (fetchedInventory) {
                setInventory(fetchedInventory);
                const fetchedInventoryItems = await fetchedInventory.items.toArray();
                setInventoryItems(fetchedInventoryItems);
            }
            const fetchedShipper = await currentTrip.shipper;
            setShipper(fetchedShipper);
        }

        fetchInventory();
    }
    

    useEffect(() => {
        dispatch(emptyCart);
        dispatch(getSingleTrip(id ?? ''));
    }, [])

    const addToOrder = (id: string) => {
        dispatch(addCartItem(id));
    }

    return (
        <Box padding='2rem' height='100%' width='100%'>
            <Typography fontSize='3rem'>{title}</Typography>
            {inventoryItems && <>
                <Typography>Inventory current as of {relativeUpdatedAt}</Typography>
                <Box display='flex' flexDirection='row'>
                    {inventoryItems && inventoryItems.map((i) => {
                        return (
                            <InventoryItem imageKey={i?.imageKey} addToOrder={addToOrder} itemId={i?.id ?? ''}/>
                        )
                    })}
                </Box> 
            </>}
            {!inventoryItems && 
                <Typography>No inventory data</Typography>
            }
        </Box>
    )
}

export default TripData;

