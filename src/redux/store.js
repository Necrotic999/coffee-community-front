import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./menu/slice";
import { reviewsReducer } from "./reviews/slice";
import { vacanciesReducer } from "./vacancies/slice";

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    vacancies: vacanciesReducer,
    menus: menuReducer,
  },
});
