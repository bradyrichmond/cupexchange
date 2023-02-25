import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createComment } from './CommentSlice';
import { DataStore } from 'aws-amplify';
import { User } from '../../models';
import { selectUserData } from '../User/UserSlice';
import { getStoreInventory } from '../Stores/InventorySlice';
import { selectCurrentStoreData } from '../Stores/StoresSlice';

interface CreateCommentFormInput {
    parent?: string
}

const CreateCommentForm = (props: CreateCommentFormInput) => {
    const { parent } = props;
    const { handleSubmit, register } = useForm();
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(selectUserData);
    const currentStoreData = useAppSelector(selectCurrentStoreData);

    const handleFormSubmit = async (data: any) => {
        const { comment } = data;
        const userId = currentUser?.id ?? '';
        const user = await DataStore.query(User, userId);
        
        if (user && currentStoreData) {
            await dispatch(createComment({ comment, commentCreatedById: userId, parent, createdBy: user }));
            await dispatch(getStoreInventory(currentStoreData?.storeInventoryId ?? ''));
        }
    }

    return (
        <Box>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Box display='flex' flexDirection='column'>
                    <TextField label="Comment..." variant="standard" {...register('comment', { required: true, minLength: 3 })} />
                    <Box marginTop='1rem'>
                        <Button type='submit' variant='contained'>Add Comment</Button>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}

export default CreateCommentForm;