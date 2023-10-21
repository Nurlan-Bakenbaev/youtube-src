import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import { todoSllice } from "../features/todo/tosoSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
