import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieId: 0,
    details: [],
    credits: [],
    cast: [],
    crew: [],
    inputQueryActivated: false,
    inputQuery: "",
    status: "loading",
  },
  reducers: {
    fetchMovieDetails: (state, { payload: movie }) => {
      state.movieId = movie.movieId;
      state.status = "loading";
    },

    fetchMovieDetailsSuccess: (state, { payload: movie }) => {
      state.details = movie.details;
      state.credits = movie.credits;
      state.cast = movie.credits.cast;
      state.crew = movie.credits.crew;
      state.status = "success";
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
    },
    getMovieId: (state, { payload }) => {
      state.status = "loading";
      state.movieId = payload.movieId;
    },
    fetchMovieCredits: (state, { payload: credits }) => {},
    inputDelay: (state, { payload }) => {},
    activateInputQuery: (state, { payload }) => {
      state.inputQueryActivated = true;
    },
    setInputQuery: (state, { payload: search }) => {
      state.inputQuery = search.inputQuery;
      console.log(state.inputQuery);
    },
  },
});
export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  getMovieId,
  fetchMovieCredits,
  inputDelay,
  activateInputQuery,
  setInputQuery,
} = movieDetailsSlice.actions;

export const selectMovieState = (state) => state.movieDetails;
export const selectMovieId = (state) => selectMovieState(state).movieId;
export const selectDetails = (state) => selectMovieState(state).details;
export const selectCredits = (state) => selectMovieState(state).credits;
export const selectCast = (state) => selectCredits(state).cast;
export const selectCrew = (state) => selectCredits(state).crew;
export const selectStatus = (state) => selectMovieState(state).status;
export const selectInputQueryActivated = (state) => selectMovieState(state).inputQueryActivated;
export const selectInputQuery = (state) => selectMovieState(state).inputQuery;

export default movieDetailsSlice.reducer;
