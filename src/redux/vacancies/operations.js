import { coffeeComApi } from "@/config/coffeeComApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendVacancyThunk = createAsyncThunk(
  "vacancies/sendVacancy",
  async (credentials, thunkApi) => {
    try {
      const { data } = await coffeeComApi.post("/api/vacancies", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || error.message || "Server error"
      );
    }
  }
);
