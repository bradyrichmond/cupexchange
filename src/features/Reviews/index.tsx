import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import ModalContainer from '../../utils/ModalContainer';
import { useForm } from 'react-hook-form';
import { DataStore } from 'aws-amplify';
import { Comment, User } from '../../models';
import { useAppSelector } from '../../hooks';
import { selectUserData } from '../User/UserSlice';
import { createReview } from '../../utils/base';
import { useParams } from 'react-router';

interface CreateReviewModalProps {
    onClose: () => void
    reviewOfId: string
}

const CreateReviewModal = (props: CreateReviewModalProps) => {
    const { onClose, reviewOfId } = props;
    const [sentiment, setSentiment] = useState('positive');
    const { handleSubmit, register } = useForm();
    const currentUser = useAppSelector(selectUserData);
    const { id } = useParams();

    const handleFormSubmit = async (data: any) => {
        const fullUserData = await DataStore.query(User, currentUser?.id ?? '');
        if (fullUserData) {
            let newComment;
            if (data.comment){
                newComment = await DataStore.save(new Comment({ comment: data.comment, commentCreatedById: currentUser?.id ?? '',  createdBy: fullUserData}));
            }
            createReview({ positive: !!(sentiment === 'positive'), reviewCommentId: newComment?.id, reviewReviewOfId: reviewOfId, reviewReviewById: currentUser?.id ?? '' }, id ?? '');
            onClose();
        }
    }

    const handleSentimentChange = (e:SelectChangeEvent<string>) => {
        setSentiment(e.target.value);
    }

    return (
        <ModalContainer onClose={onClose}>
            <Box height='100%'>
                <form onSubmit={handleSubmit(handleFormSubmit)} style={{height: '100%'}}>
                    <Box display='flex' flexDirection='column' height='100%'>
                        <TextField label="Comment" variant="standard" {...register('comment')} />
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel>How was your experience?</InputLabel>
                            <Select
                                onChange={handleSentimentChange}
                                label="Overall Experience"
                                value={sentiment}
                            >
                                <MenuItem value={'positive'}>Positive</MenuItem>
                                <MenuItem value={'negative'}>Negative</MenuItem>
                            </Select>
                        </FormControl>
                        <Box flex='1' display='flex' alignItems='flex-end'>
                            <Button type='submit' variant='contained'>Create Review</Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </ModalContainer>
    )
}

export default CreateReviewModal;