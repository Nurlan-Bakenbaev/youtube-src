import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};
export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (_,{rejectWithValue})=>{
        const res await axios
    }
)
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

  },
});
