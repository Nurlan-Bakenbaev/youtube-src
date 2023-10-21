import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};
export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (_,{})=>{}
)
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

  },
});
