import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  posts: any;
  updateingData: any;
  singleData: any;
}

const initialState: CounterState = {
  posts: [],
  updateingData: [],
  singleData: []
};

export const postSlices = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fillPosts: (state, action: PayloadAction<any>) => {
      state.posts = action?.payload?.reverse();
    },
    updateData: (state, action: PayloadAction<any>) => {
      // console.log('catdi', action.payload);
      state.updateingData = action?.payload;
    },
    setPostPageSingleData: (state, action: PayloadAction<any>) => {
      state.singleData = action?.payload;
    }
  }
});

export const { fillPosts, updateData, setPostPageSingleData } =
  postSlices.actions;

export default postSlices.reducer;
