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
    fetchMoviesSuccess: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
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
  fetchMoviesFailure,
  clearSearchResults,
} = moviesListSlice.actions;

export const getPopularMoviesData = () => async (dispatch) => {
    try {
      dispatch(fetchMovies());
      const movies = await tmdbApi.getPopularMoviesData(); 
      dispatch(fetchMoviesSuccess(movies));
    } catch (error) {
      dispatch(fetchMoviesFailure(error.message));
    }
  };
  export const searchMoviesData = (query) => async (dispatch) => {
    try {
      dispatch(fetchMovies());
      const movies = await tmdbApi.searchMoviesData(query);
      dispatch(fetchMoviesSuccess(movies));
    } catch (error) {
      dispatch(fetchMoviesFailure(error.message));
    }
  };
  export const selectMovies = (state) => state.moviesList.movies;
export const selectLoading = (state) => state.moviesList.loading;
export const selectError = (state) => state.moviesList.error;
  
  export default moviesListSlice.reducer;