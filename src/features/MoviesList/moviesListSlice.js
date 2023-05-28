import { createSlice } from "@reduxjs/toolkit";


const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchMovies: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies;
      state.loading = false;
      state.error = null;
    },
    fetchMoviesError: (state) => {
      state.loading = false;
      state.error = true;
    },
    clearSearchResults: (state) => {
      state.movies = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  clearSearchResults,
} = moviesListSlice.actions;

export const selectMovies = (state) => state.moviesList.movies;
export const selectLoading = (state) => state.moviesList.loading;
export const selectError = (state) => state.moviesList.error;

export default moviesListSlice.reducer;
