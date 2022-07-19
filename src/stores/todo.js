import { createSlice } from "@reduxjs/toolkit";
import database from "../firebase";


const initialState = {
  todoList: [],
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    load: (state, action) => {
      state.todoList = action.payload;
    },
    addTodo: (state, action) => {
      state.todoList = [
        action.payload, 
        ...state.todoList
      ];
      database.ref("todoList").set(state.todoList);
    },
     deleteTodos: (state, action) => {
      const data = [...state.todoList]
      const index = data.indexOf(action.payload)
      data.splice(index,1)
      state.todoList = data
     },
  },
});

export const { addTodo, load, deleteTodos } = todos.actions;
export default todos.reducer;
