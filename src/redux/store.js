import { reviewsReducer } from "./reviews/slice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
  },
});
