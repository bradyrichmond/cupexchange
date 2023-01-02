import { Box, Button, Typography } from '@mui/material';
import React from 'react';

interface DeleteStoreModalProps {
    confirm: () => void
    cancel: () => void
    storeName: string
}

const DeleteStoreModal = (props: DeleteStoreModalProps) => {
    const { confirm, cancel, storeName } = props;

    return (
        <Box padding='2rem' borderRadius='2rem' bgcolor='#ffffff'>
            <Typography>Are you sure you want to delete {storeName}</Typography>
            <Box display='flex' flexDirection='row'>
                <Box flex='1' display='flex' justifyContent='center' alignItems='center'>
                    <Button onClick={cancel}>Cancel</Button>
                    <Button onClick={confirm}>Confirm</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default DeleteStoreModal;