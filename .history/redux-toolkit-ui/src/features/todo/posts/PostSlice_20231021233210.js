import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};
export const getPosts = createAsyncThunk(
    'posts'
)
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

  },
});
