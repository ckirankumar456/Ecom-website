import { createSlice } from "@reduxjs/toolkit";

export const AddToCartSlice = createSlice({
  name: "addtocart",
  initialState: {
    addSelected: [],
    countLength: 0,
  },
  reducers: {
    SelectedAddtoCart: (state, action) => {
      state.addSelected.push(action.payload);
    },
    RemoveFromCart: (state, action) => {
      state.addSelected = state.addSelected.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});
export const { SelectedAddtoCart, RemoveFromCart } = AddToCartSlice.actions;
export default AddToCartSlice.reducer;
