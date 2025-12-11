import { coffeeComApi } from "@/config/coffeeComApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMenuThunk = createAsyncThunk(
  "menu/get-menu",
  async (_, thunkApi) => {
    try {
      const { data } = await coffeeComApi.get("/api/menu");

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
