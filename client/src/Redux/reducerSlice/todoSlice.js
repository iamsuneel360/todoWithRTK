import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: nanoid(), name: "Sunil" },
  { id: nanoid(), name: "Ram" },
  { id: nanoid(), name: "Hari" },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
