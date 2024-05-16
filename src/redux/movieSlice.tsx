import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'

export interface IMovieState{
    movies: any[],
    pageNum: number,
    total: number,
    error: string | null,
    loading: boolean
}

const initialState: IMovieState = {
    movies: [],
    pageNum : 0,
    total: 0,
    error: '',
    loading: false
}

interface FetchMovieParams {
    name: string, page: number
  }

export const searchMovies = createAsyncThunk<any, FetchMovieParams>('movies', async ( {name, page}  ) => {
    const response = await fetch('https://www.omdbapi.com/?s='+name+'&apikey=fdf5544f&page='+ page)
    return response.json();
  })

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
    },
    extraReducers(builder){
        builder.addCase(searchMovies.pending,(state) => {
            state.loading = true;
        }).addCase(searchMovies.fulfilled,(state, action) => {
            state.loading = false;
            state.error = null;
            state.movies = action.payload.Search;
            state.total = action.payload.totalResults
        }).addCase(searchMovies.rejected,(state, action:PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.movies = action.payload;
        })
    }
  })

 

  export default movieSlice.reducer