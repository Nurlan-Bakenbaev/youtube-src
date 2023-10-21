import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(setPosts(res.data));
  }
);
export const  removePost = createAsyncThunk()
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state) => {
        console.log("fulfilled");
      })
      .addCase(getPosts.pending, (state) => {
        console.log("pending");
      })
      .addCase(getPosts.rejected, (state) => {
        console.log("rejected");
      });
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
