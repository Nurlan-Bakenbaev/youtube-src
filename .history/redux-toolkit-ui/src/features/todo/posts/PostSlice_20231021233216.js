import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};
export const getPosts = createAsyncThunk(
    'posts/get'
)
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

  },
});
