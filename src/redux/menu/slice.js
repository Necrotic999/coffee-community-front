import { createSlice } from "@reduxjs/toolkit";
import { getMenuThunk } from "./operations";

const initialState = {
  menus: [],
  error: null,
  loading: false,
};

const menuSlice = createSlice({
  name: "menus",
  initialState,
  selectors: {
    selectMenu: (state) => state.menus,
    selectLoading: (state) => state.loading,
    selectError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMenuThunk.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getMenuThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.menus = payload;
      })
      .addCase(getMenuThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const menuReducer = menuSlice.reducer;
export const { selectMenu, selectError, selectLoading } = menuSlice.selectors;
