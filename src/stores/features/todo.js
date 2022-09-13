import { createSlice } from "@reduxjs/toolkit";
import database from "../../config/firebase";

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
      state.todoList = [action.payload, ...state.todoList];
      database.ref("todoList").set(state.todoList);
    },
    deleteTodos: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
  },
});

export const { addTodo, load, deleteTodos } = todos.actions;
export default todos.reducer;
