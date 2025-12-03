const { createSlice } = require("@reduxjs/toolkit");
const { getReviewsThunk, sendReviewThunk } = require("./operations");

const initialState = {
  reviews: [],
  error: null,
  loading: false,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviews: (state) => state.reviews,
    selectLoading: (state) => state.loading,
    selectError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsThunk.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getReviewsThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.reviews = payload;
      })
      .addCase(getReviewsThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(sendReviewThunk.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(sendReviewThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.reviews.push(payload);
      })
      .addCase(sendReviewThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
export const { selectReviews, selectError, selectLoading } =
  reviewsSlice.selectors;
