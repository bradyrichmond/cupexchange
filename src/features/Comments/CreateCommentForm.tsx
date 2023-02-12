import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

const CreateCommentForm = () => {
    const { handleSubmit, register } = useForm();

    const handleFormSubmit = (data: any) => {

    }

    return (
        <Box>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Box display='flex' flexDirection='column'>
                        <TextField label="Comment..." variant="standard" {...register('comment', { required: true, minLength: 3 })} />
                        <Button type='submit' variant='contained'>Add Comment</Button>
                    </Box>
                </form>
        </Box>
    )
}

export default CreateCommentForm;