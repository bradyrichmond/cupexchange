import React from 'react';
import { Box } from '@mui/system';
import { Comment } from '../../models';
import { Typography } from '@mui/material';

interface CommentProps {
    comments?: Comment[]
}

const CommentsContent = (props: CommentProps) => {
    const { comments } = props;

    return (
        <Box>
            {comments && comments.length > 0 ?
                comments.map(() => {
                  return  <CommentItem />
                })
                :
                <Typography>No comments</Typography>
            }
        </Box>
    )
}

const CommentItem = () => {
    return (
        <Typography>There are comments</Typography>
    )
}

export default CommentsContent;