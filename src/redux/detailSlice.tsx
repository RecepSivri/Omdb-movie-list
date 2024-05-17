import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieById } from "../services/services";
import { FetchDetailParams, IDetailState } from "../models/models";

const initialState: IDetailState = {
  data: {
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Ratings: [],
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    DVD: "",
    BoxOffice: "",
    Production: "",
    Website: "",
    Response: "",
  },
  error: "",
  loading: false,
};

export const getDetail = createAsyncThunk<any, FetchDetailParams>(
  "detail",
  async ({ id }) => {
    const response = await getMovieById(id);
    return response.json();
  },
);

const detailSlice = createSlice({
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
        state.data = action.payload;
        state.loading = false;
        if (Response === "True") {
          console.log(action.payload);
        } else if (Response === "False") {
          state.error = "true";
        }
      });
  },
});

export default detailSlice.reducer;
