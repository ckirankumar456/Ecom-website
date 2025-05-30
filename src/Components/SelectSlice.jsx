import { createSlice } from "@reduxjs/toolkit";

export const SelectSlice = createSlice({
  name: "selected",
  initialState: {
    select: [],
    clickedItem: null,
  },
  reducers: {
    SelectProduct: (state, action) => {
      state.select = action.payload;
    },
    SetClickedItem: (state, action) => {
      state.clickedItem = action.payload;
    },
  },
});

export const { SelectProduct, SetClickedItem } = SelectSlice.actions;
export default SelectSlice.reducer;
