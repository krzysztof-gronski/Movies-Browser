import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    movies: [],
    genres: [],
    status: "loading",
    page: 1,
    totalPages: null,
  },
  reducers: {
    fetchMovies: (state, { payload: page }) => {
      state.page = page;
      state.status = "loading";
    },
    fetchMoviesSuccess: (state, { payload }) => {
      state.movies = payload.movies.results;
      state.page = payload.movies.page;
      state.totalPages = payload.movies.total_pages;
      state.genres = payload.genres;
    },
    fetchMoviesError: (state) => {
      state.status = "error";
    },
  },
});
export const { fetchMovies, fetchMoviesSuccess, fetchMoviesError } =
  moviesListSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectPage = (state) => selectMoviesState(state).page;
export const selectTotalPages = (state) => selectMoviesState(state).totalPages;
export const selectStatus = (state) => selectMoviesState(state).status;
export const selectGenres = (state) => selectMoviesState(state).genres;
export default moviesListSlice.reducer;
