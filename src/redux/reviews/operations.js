import { coffeeComApi } from "@/config/coffeeComApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviewsThunk = createAsyncThunk(
  "reviews/get-reviews",
  async (_, thunkApi) => {
    try {
      const { data } = await coffeeComApi.get("/api/reviews");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const sendReviewThunk = createAsyncThunk(
  "reviews/send-review",
  async (credentials, thunkApi) => {
    try {
      const { data } = await coffeeComApi.post("/api/reviews", credentials);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
