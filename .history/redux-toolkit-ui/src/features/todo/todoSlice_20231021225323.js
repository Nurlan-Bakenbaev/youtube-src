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
    toggleCompleted: (state, action) => {
      const toogleTodo = state.todos.find((todo) => todo.id === action.payload);
      toogleTodo.completed = !toogleTodo.completed;
    },
    deleteTodo : (state,action)=>{
      state.todos.push = state.todos.find
    }
  },
});
export const { addTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
