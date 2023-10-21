import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import todo
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
