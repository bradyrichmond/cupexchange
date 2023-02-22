import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { CommentType } from './CommentSlice';
import CreateCommentForm from './CreateCommentForm';

interface CommentProps {
    comments?: CommentType[]
    parent?: string
}

const CommentsContent = (props: CommentProps) => {
    const { comments, parent } = props;

    return (
        <Box padding='2rem' borderRadius='2rem' bgcolor='rgba(255, 255, 255, 255)' minWidth='25%' minHeight='25%' display='flex' flexDirection='column'>
            <Box flex='1'>
                {comments && comments.length > 0 ?
                    comments.map((c) => {
                        return  <CommentItem comment={c} key={c.id} />
                    })
                    :
                    <Typography>No comments</Typography>
                }
            </Box>
            <CreateCommentForm parent={parent}/>
        </Box>
    )
}

interface CommentItemProps {
    comment: CommentType
}

const CommentItem = (props: CommentItemProps) => {
    const { comment } = props;

    return (
        <Typography>{comment.comment}</Typography>
    )
}

export default CommentsContent;