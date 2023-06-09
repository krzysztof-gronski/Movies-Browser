import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "personDetails",
  initialState: {
    personId: 0,
    details: [],
    genres: [],
    cast: [],
    crew: [],
    status: "loading",
  },
  reducers: {
    fetchPersonDetailsSuccess: (state, { payload: person }) => {
      state.details = person.details;
      state.cast = person.credits.cast;
      state.crew = person.credits.crew;
      state.genres = person.genres;
      state.status = "success";
    },
    fetchPersonDetailsError: (state) => {
      state.status = "error";
    },
    getDetailsForPerson: (state, { payload: person }) => {
      state.personId = person.personId;
      state.status = "loading";
    },
    personInputDelay: (state, { payload }) => {},
  },
});
export const {
  fetchPersonDetailsSuccess,
  getDetailsForPerson,
  fetchPersonDetailsError,
  personInputDelay,
} = personSlice.actions;

export const selectPersonState = (state) => state.personDetails;
export const selectPersonId = (state) => selectPersonState(state).personId;
export const selectDetails = (state) => selectPersonState(state).details;
export const selectPersonGenres = (state) => selectPersonState(state).genres;
export const selectCrew = (state) => selectPersonState(state).crew;
export const selectCast = (state) => selectPersonState(state).cast;
export const selectStatus = (state) => selectPersonState(state).status;

export default personSlice.reducer;
