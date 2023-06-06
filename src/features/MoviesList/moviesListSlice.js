import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    movies: [],
    genres: [],
    status: "loading",
    page: 1,
    totalPages: null,
    query: "",
    totalResults: 0,
  },
  reducers: {
    fetchMovies: (state, { payload: page }) => {
      state.page = page;
      state.status = "loading";
    },
    fetchMoviesSuccess: (state, { payload: moviesData }) => {
      state.movies = moviesData.movies.results;
      state.page = moviesData.movies.page;
      state.totalPages = moviesData.movies.total_pages;
      state.totalResults = moviesData.movies.total_results;
      state.status = "success";
      state.genres = moviesData.genres;
    },
    fetchMoviesError: (state) => {
      state.status = "error";
    },
    setQuery: (state, { payload }) => {
      state.query = payload.query;
      state.status = "loading";
    },
    moviesListReloadDebounce: (state, { payload }) => {
      state.query = payload.query;
    },
  },
});
export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchGenres,
  fetchMovieDetails,
  setQuery,
  moviesListReloadDebounce,
} = moviesListSlice.actions;

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
export const selectTotalResults = (state) =>
  selectMoviesState(state).totalResults;
export const selectQuery = (state) => selectMoviesState(state).query;
export default moviesListSlice.reducer;
