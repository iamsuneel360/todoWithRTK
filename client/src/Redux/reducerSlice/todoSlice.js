import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: nanoid(), name: "Sunil" },
    { id: nanoid(), name: "Ram" },
    { id: nanoid(), name: "Hari" },
  ],
  toogleForm: true,
  todoUpdate: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    todoCleared: (state, action) => {
      state.todos = [];
    },
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { todoAdded, todoCleared, todoDeleted } = todoSlice.actions;
export default todoSlice.reducer;
