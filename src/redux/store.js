import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./menu/slice";
import { reviewsReducer } from "./reviews/slice";

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    menus: menuReducer,
  },
});
