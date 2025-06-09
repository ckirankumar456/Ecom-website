import { configureStore } from "@reduxjs/toolkit";
import SelectReduce from "./SelectSlice";
import SelectToAddReducer from "./AddToCartSlice";
import wishlistReducer from "./WishlistSlice";

export const store = configureStore({
  reducer: {
    selected: SelectReduce,
    addtocart: SelectToAddReducer,
    wishlist: wishlistReducer,
  },
});
