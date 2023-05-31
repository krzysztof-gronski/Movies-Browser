import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieId: 0,
    details: [],
    credits: [],
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
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
    },
    getMovieId: (state, { payload }) => {
      state.status = "loading";
      state.movieId = payload.movieId;
    },
    
    fetchMovieCredits: (state, { payload: credits }) => {
        state.credits = credits;
      },
      
  },
});
export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  getMovieId,
  fetchMovieCredits,
} = movieDetailsSlice.actions;

export const selectMovieState = (state) => state.movieDetails;
export const selectMovieId = (state) => selectMovieState(state).movieId;
export const selectDetails = (state) => selectMovieState(state).details;
export const selectCredits = (state) => selectMovieState(state).credits;
export const selectCast = (state) => selectCredits(state).cast;
export const selectCrew = (state) => selectCredits(state).crew;
export const selectStatus = (state) => selectMovieState(state).status;

export default movieDetailsSlice.reducer;