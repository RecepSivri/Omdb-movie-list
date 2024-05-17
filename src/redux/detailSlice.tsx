import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { searchMoviesService } from "../services/services";
import { FetchMovieParams, IMovieState } from "../models/models";

const initialState: IMovieState = {
  movies: [],
  pageNum: 1,
  total: 0,
  error: "",
  loading: false,
};

export const getDetail = createAsyncThunk<any, FetchMovieParams>(
  "detail",
  async ({ name, page }) => {
    const response = await searchMoviesService(name, page);
    return response.json();
  },
);

const movieSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDetail.fulfilled, (state, action) => {
        const { Response } = action.payload;

        state.loading = false;
        if (Response === "True") {
          state.movies = action.payload.Search;
          state.total = action.payload.totalResults;
          const { arg } = action.meta;
          state.pageNum = arg.page;
        } else if (Response === "False") {
          state.error = "true";
          state.movies = [];
          state.total = 0;
        }
      });
  },
});

export default movieSlice.reducer;
