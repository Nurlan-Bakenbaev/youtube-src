import { createSlice ,create} from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

  },
});
