import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};
export const getPosts = createAsyncThunk(
    
)
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

  },
});
