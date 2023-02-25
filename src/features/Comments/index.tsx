import React from 'react';
import { Box } from '@mui/system';
import { Chip, Typography } from '@mui/material';
import { CommentType } from './CommentSlice';
import CreateCommentForm from './CreateCommentForm';
import { formatRelative, parseISO } from 'date-fns';
import ModalContainer from '../../utils/ModalContainer';

interface CommentProps {
    comments?: CommentType[]
    parent?: string
    onClose: () => void
    itemAddedById: String
}

const CommentsContent = (props: CommentProps) => {
    const { comments, parent, itemAddedById, onClose } = props;

    return (
        <ModalContainer onClose={onClose}>
            <Box display='flex' flexDirection='column' overflow='auto'>
                <Box flex='1' overflow='auto'>
                    {comments && comments.length > 0 ?
                        comments.map((c) => {
                            return  <CommentItem comment={c} key={c.id} itemAddedById={itemAddedById}/>
                        })
                        :
                        <Typography>No comments</Typography>
                    }
                </Box>
                <CreateCommentForm parent={parent} />
            </Box>
        </ModalContainer>
    )
}

interface CommentItemProps {
    comment: CommentType
    itemAddedById: String
}

const CommentItem = (props: CommentItemProps) => {
    const { comment, itemAddedById } = props;
    const commentCreatedAt = comment.createdAt;
    const relativeCreatedAt = commentCreatedAt ? formatRelative(parseISO(commentCreatedAt), Date.now()) : 'now';

    return (
        <Box display='flex' flexDirection='column' paddingBottom='1rem' borderBottom='2px solid rgba(246,236,54,255)' paddingTop='1rem'>
            <Box display='flex' flexDirection='row' justifyContent='flex-start' alignItems='center'>
                <Typography fontWeight='bold' marginRight='1rem'>{comment.createdBy.first_name} {comment.createdBy.last_name}</Typography>
                {comment.createdBy.id === itemAddedById &&
                    <Chip label='OP' />
                }
            </Box>
            <Typography>{comment.comment}</Typography>
            <Typography color='#ccc' marginTop='2rem'>{relativeCreatedAt}</Typography>
        </Box>
    )
}

export default CommentsContent;