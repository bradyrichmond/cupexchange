import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Comment, Inventory, Lego, Store } from '../../models';
import { DataStore } from 'aws-amplify';
import { RootState } from '../../store';
import { CommentType } from '../Comments/CommentSlice';

export interface LegoType {
  id: string
  imageKey: string
  comments: CommentType[]
  itemAddedById?: string | null
}

const convertComment = async (commentData: Comment) => {
  const { id, createdBy, comment, createdAt, edited } = commentData;
  const createdByUser = await createdBy;

  return {
    id,
    createdBy: createdByUser,
    comment,
    createdAt: createdAt ?? '', 
    edited
  }
}

export const createStoreInventory = createAsyncThunk(
    'inventory/createStoreInventory',
    async (input: { lego: ({ imageKey: string | undefined, labels: any[] | undefined })[], storeId: string, userId: string }) => {
      const inventoryResponse = await DataStore.save(new Inventory({ inventoryCreatedById: input.userId }));
      const inventoryResponseId = inventoryResponse.id;
      
      await Promise.all(input.lego.map(async (lego: { imageKey: string | undefined, labels: any[] | undefined }) => {
        if (lego.imageKey) {
          return await DataStore.save(new Lego({ imageKey: lego.imageKey, labels: lego.labels ?? [], inventoryItemsId: inventoryResponseId, comments: [] }));
        }
      }));
      const store = await DataStore.query(Store, input.storeId);
      if (store) {
        await DataStore.save(Store.copyOf(store, updated => {
          updated.storeInventoryId = inventoryResponseId;
        }))
      }
    }
)

export const getStoreInventory = createAsyncThunk(
  'inventory/getStoreInventory',
  async (id: string) => {
    const lego = await DataStore.query(Lego, (L) => L.inventoryItemsId.eq(id));
    const legoList: LegoType[] = await Promise.all(lego.map(async (l) => {
      const commentsList = await l.comments.toArray();
      const transformedComments = await Promise.all(commentsList.map(async (c) => {
        const transformedComment = await convertComment(c);
        return transformedComment;
      }))

      const inventory = await DataStore.query(Inventory, id);
      
      return { 
        id: l.id, 
        imageKey: l.imageKey,
        comments: transformedComments,
        itemAddedById: inventory?.inventoryCreatedById
      }
    }));
    return legoList;
  }
)

interface InventoryState {
  loading: Boolean
  currentInventory: (LegoType | undefined)[] | undefined;
}

const initialState: InventoryState = {
  loading: false,
  currentInventory: undefined
}

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStoreInventory.rejected, (state, action) => {
        console.log('createStoreInventory failed');
        state.loading = false;
      })
      .addCase(createStoreInventory.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createStoreInventory.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getStoreInventory.rejected, (state, action) => {
        console.log('getStoreInventory failed');
        state.loading = false;
      })
      .addCase(getStoreInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.currentInventory = action.payload;
      })
      .addCase(getStoreInventory.pending, (state, action) => {
        state.loading = true;
      })
  },
});

export const selectCurrentInventory = (state: RootState) => state.inventory.currentInventory;

export default inventorySlice.reducer;