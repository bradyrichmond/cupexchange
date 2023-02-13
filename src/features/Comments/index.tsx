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
                comments.map((c) => {
                  return  <CommentItem comment={c} key={c.id} />
                })
                :
                <Typography>No comments</Typography>
            }
        </Box>
    )
}

interface CommentItemProps {
    comment: Comment
}

const CommentItem = (props: CommentItemProps) => {
    const { comment } = props;

    return (
        <Typography>{comment.comment}</Typography>
    )
}

export default CommentsContent;