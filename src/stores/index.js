import { configureStore } from "@reduxjs/toolkit";

import todo from "./features/todo";

const store = configureStore({
  reducer: {
    todo,
  },
});

export default store;
