import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todos",
  state: initialState,
  reducers: {
    addTodo: (state, action),
    
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
