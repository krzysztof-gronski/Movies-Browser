import { createSlice } from "@reduxjs/toolkit";
import { tmdbApi } from "../api/apiData";

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
    fetchMoviesError: (state, { payload: movies }) => {
      state.loading = false;
      state.error = movies;
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

export const getPopularMoviesData = () => async (dispatch) => {
  try {
    dispatch(fetchMovies());
    const movies = await tmdbApi.getPopularMoviesData();
    dispatch(fetchMoviesSuccess(movies));
  } catch (error) {
    dispatch(fetchMoviesError(error.message));
  }
};
export const searchMoviesData = (query) => async (dispatch) => {
  try {
    dispatch(fetchMovies());
    const movies = await tmdbApi.searchMoviesData(query);
    dispatch(fetchMoviesSuccess(movies));
  } catch (error) {
    dispatch(fetchMoviesError(error.message));
  }
};
export const selectMovies = (state) => state.moviesList.movies;
export const selectLoading = (state) => state.moviesList.loading;
export const selectError = (state) => state.moviesList.error;

export default moviesListSlice.reducer;
