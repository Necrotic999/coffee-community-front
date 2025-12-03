import { createSlice } from "@reduxjs/toolkit"; 
import { sendVacancyThunk } from "./operations";

const initialState = {
    loading: false,
  success: false,
  error: null,
}
const vacanciesSlice = createSlice({
    name: "vacancies",
    initialState,
    selectors: {
        selectVacancyLoading: (state) => state.loading,
        selectVacancySuccess: (state) => state.success,
        selectVacancyError: (state) => state.error,
    },
    extraReducers: (builder) => {
        builder
        .addCase(sendVacancyThunk.fulfilled, (state) => {
            state.loading = false;
            state.success = true;

        })
        .addCase(sendVacancyThunk.pending, (state) => {
                state.error = null;
                state.loading = true;
              })
        .addCase(sendVacancyThunk.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
              });
    },
})
export const vacanciesReducer = vacanciesSlice.reducer;
export const { selectVacancyLoading, selectVacancySuccess, selectVacancyError } = vacanciesSlice.selectors;