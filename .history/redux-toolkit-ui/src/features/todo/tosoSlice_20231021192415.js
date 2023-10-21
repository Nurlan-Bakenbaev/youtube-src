import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
export const todoSllice = createSlice({
    name:'todos',
    state:initialState,
    reducers:{
        addTodo :(state,action)
    }
})
export const 