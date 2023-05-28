import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    movies: [],
    genres: [],
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
    fetchGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  clearSearchResults,
  fetchGenres,
} = moviesListSlice.actions;

export const selectMovies = (state) => state.moviesList.movies;
export const selectLoading = (state) => state.moviesList.loading;
export const selectError = (state) => state.moviesList.error;
export const selectGenres = (state) => state.moviesList.genres;

export default moviesListSlice.reducer;
