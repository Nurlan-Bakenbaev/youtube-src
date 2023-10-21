import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
};
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue ,dis}) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  }
);
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
