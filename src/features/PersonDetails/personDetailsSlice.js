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
      state.status = "success";
    },
    fetchPersonDetailsError: (state) => {
      state.status = "error";
    },
    getDetailsForPerson: (state, { payload: person }) => {
      state.status = "loading";
      state.personId = person.personId;
    },
  },
});
export const {
  fetchPersonDetailsSuccess,
  getDetailsForPerson,
  fetchPersonDetailsError,
} = personSlice.actions;

export const selectPersonState = (state) => state.personDetails;
export const selectPersonId = (state) => selectPersonState(state).personId;
export const selectDetails = (state) => selectPersonState(state).details;
export const selectPersonGenres = (state) => selectPersonState(state).genres;
export const selectCrew = (state) => selectPersonState(state).crew;
export const selectCast = (state) => selectPersonState(state).cast;
export const selectStatus = (state) => selectPersonState(state).status;

export default personSlice.reducer;
