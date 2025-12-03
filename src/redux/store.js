import { reviewsReducer } from "./reviews/slice";
import { vacanciesReducer } from "./vacancies/slice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    vacancies: vacanciesReducer,
  },
});
