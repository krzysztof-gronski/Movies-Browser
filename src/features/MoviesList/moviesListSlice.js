import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
  name: "moviesList",
  initialState: {
    movies: [],
    genres: [],
    status: "loading",
    page: 1,
    totalPages: null,
    inputRef: null,
    totalResults: 0,
  },
  reducers: {
    fetchMovies: (state, { payload: page }) => {
      state.page = page;
      //state.status = "loading";
    },
    fetchSearchMovies: (state, { payload: page }) => {
      state.page = page;
      //state.status = "loading";
    },
    fetchMoviesSuccess: (state, { payload: moviesData }) => {
      state.movies = moviesData.movies.results;
      state.page = moviesData.movies.page;
      state.totalPages = moviesData.movies.total_pages;
      state.totalResults = moviesData.movies.total_results;
      state.genres = moviesData.genres;
      state.status = "success";
    },
    fetchMoviesError: (state) => {
      state.status = "error";
    },
    setStatus: (state, { payload }) => {
      state.status = payload.status;
    },
  },
});
export const {
  fetchMovies,
  fetchSearchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchGenres,
  fetchMovieDetails,
  setStatus,
  setQueryLabel,
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
export const selectQueryLabel = (state) => selectMoviesState(state).queryLabel;
export const selectInputRef = (state) => selectMoviesState(state).inputRef;
export default moviesListSlice.reducer;
