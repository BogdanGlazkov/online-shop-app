import { createSlice } from "@reduxjs/toolkit";

export const gadgetsSlice = createSlice({
  name: "gadgets",
  initialState: {
    selectedCategory: "ALL",
  },
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const getSelectedCategory = (state) => state.gadgets.selectedCategory;
export const { filterCategory } = gadgetsSlice.actions;
export default gadgetsSlice.reducer;
