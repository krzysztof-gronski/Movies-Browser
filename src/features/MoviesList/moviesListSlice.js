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
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies.results;
      state.page = movies.page;
      state.totalPages = movies.total_pages;
    },
    fetchMoviesError: (state) => {
      state.status = "error";
    },
    fetchGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
  },
});
export const { fetchMovies, fetchMoviesSuccess, fetchMoviesError, fetchGenres } =
  moviesListSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectPage = (state) => selectMoviesState(state).page;
export const selectTotalPages = (state) => selectMoviesState(state).totalPages;
export const selectStatus = (state) => selectMoviesState(state).status;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectMovieById = (state, movieId) => {
  const movies = selectMovies(state);
  return movies.find((movie) => movie.id === movieId);
};
export default moviesListSlice.reducer;
