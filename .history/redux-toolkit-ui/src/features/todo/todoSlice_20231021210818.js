import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleCompleted:(state,action)=>{
      const toogleTodo = state.todos.find
    }
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
