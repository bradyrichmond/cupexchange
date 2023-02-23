import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataStore } from "aws-amplify";
import { Comment, Lego, User } from "../../models";
import { UserType } from "../User/UserSlice";

export interface CommentType {
   id: string
   createdBy: UserType
   children?: CommentType[]
   comment: string
   createdAt: string
   edited?: boolean | null
}

export interface ReviewType {
   id: string
   comment: CommentType
   positive: boolean
   reviewOf: UserType
   reviewBy: UserType
}

interface CreateCommentInput {
   createdBy: User
   parent?: string
   comment: string
   commentCreatedById: string
}

export const createComment = createAsyncThunk(
   'comments/createComment',
   async (input: CreateCommentInput) => {
      const { createdBy, parent, comment, commentCreatedById } = input;
      await DataStore.save(new Comment({ createdBy, comment, commentCreatedById, parent, legoCommentsId: parent }));
   }
)

export const commentSlice = createSlice({
   name: 'comment',
   initialState: { loading: false },
   reducers: {
   },
   extraReducers: (builder) => {
     builder
       .addCase(createComment.rejected, (state, action) => {
         console.log('createComment failed');
         state.loading = false;
       })
       .addCase(createComment.fulfilled, (state, action) => {
         state.loading = false;
       })
       .addCase(createComment.pending, (state, action) => {
         state.loading = true;
       })
       
   },
 });