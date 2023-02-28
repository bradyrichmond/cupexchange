import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Review } from '../../models';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { getReviewsByUserId } from '../../utils/base';
import { formatRelative, parseISO } from 'date-fns';
import { Typography } from '@mui/material';

interface ReviewType {
    id: string
    commentString?: string
    positive?: boolean | null
    reviewBy: string
    createdAt?: string | null
    isShipper: boolean
}

let initialReviews: ReviewType[];

const transformReviews = async (review: Review) => {
    const { id, positive } = review;
    const reviewByUser = await review.reviewBy;
    const comment = await review.comment;
    const order = await review.order;
    
    return {
        id,
        commentString: comment?.comment,
        positive,
        reviewBy: `${reviewByUser.first_name} ${reviewByUser.last_name}`,
        isShipper: order?.orderShipperId === review.reviewReviewOfId
    }
}

interface UserReviewHistoryProps {
    userId: string
}

const UserReviewHistory = (props: UserReviewHistoryProps) => {
    const { userId } = props;
    const [reviews, setReviews] = useState(initialReviews);

    useEffect(() => {
        const load = async () => {
            const fetchedReviews = await getReviewsByUserId(userId ?? '');
            const morphedReviews = await Promise.all(fetchedReviews.map(transformReviews));
            setReviews(morphedReviews);
        }

        load();
    }, [userId])

    const rows: GridRowsProp = reviews ?? [];

    const columns: GridColDef[] = [
        { field: 'positive', headerName: 'Positive?', width: 300 },
        { field: 'commentString', headerName: 'Comment', width: 450 },
        { field: 'isShipper', headerName: 'Was Shipper?', width: 300 },
        { field: 'reviewBy', headerName: 'Review By', width: 300 },
    ];

    return (
        <Box width='100%' display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
            <Typography variant='h2'>User Review History</Typography>
            {reviews && <DataGrid rows={rows} columns={columns} style={{background: 'rgba(255, 255, 255, 255)', borderRadius: '2rem', color: 'rgba(131,133,146,255)', padding: '2rem', fontSize: '1.5rem', fontWeight: 'bold', width: '90%'}} />}
        </Box>
    )
}

export default UserReviewHistory;