import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import todoSlice from "../features/todo/todoSlice";
import PostSlice from "../features/todo/posts/PostSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
    post:PostSlice
  },
});
