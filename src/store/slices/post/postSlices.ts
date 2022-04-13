import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  posts: any;
}

const initialState: CounterState = {
  posts: []
};

export const postSlices = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fillPosts: (state, action: PayloadAction<any>) => {
      state.posts = action?.payload?.reverse();
    },
    addItemData: (state, action: PayloadAction<any>) => {
      state.posts = [action.payload, ...state.posts];
    },
    deleteItemData: (state, action: PayloadAction<any>) => {
      state.posts = state.posts.filter(
        (item: any) => item.id !== action.payload
      );
    }
  }
});

export const { fillPosts, deleteItemData, addItemData } = postSlices.actions;

export default postSlices.reducer;
