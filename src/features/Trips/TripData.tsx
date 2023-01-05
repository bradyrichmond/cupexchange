import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSingleTrip, selectCurrentTrip } from './TripsSlice';

const TripData = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const currentTrip = useAppSelector(selectCurrentTrip);

    useEffect(() => {
        dispatch(getSingleTrip(id ?? ''));
    }, [])

    return (
        <Box padding='2rem' height='100%' width='100%'>currentTrip {JSON.stringify(currentTrip)}</Box>
    )
}

export default TripData;