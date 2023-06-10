import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
  name: "peopleList",
  initialState: {
    page: 1,
    totalPages: null,
    totalResults: 0,
    people: [],
    status: "loading",
  },
  reducers: {
    fetchPeople: (state, { payload: page }) => {
      state.page = page;
    },
    fetchSearchPeople: (state, { payload: page }) => {
      state.page = page;
    },
    fetchPeopleSuccess: (state, { payload: people }) => {
      state.status = "success";
      state.totalPages = people.total_pages;
      state.totalResults = people.total_results;
      state.people = people.results;
    },
    fetchPeopleError: (state) => {
      state.status = "error";
    },
    setStatus: (state, { payload }) => {
      state.status = payload.status;
    },
  },
});
export const {
  fetchPeople,
  fetchSearchPeople,
  fetchPeopleSuccess,
  fetchPeopleError,
  setQuery,
  setStatus,
} = peopleListSlice.actions;

export const selectPeopleListState = (state) => state.peopleList;
export const selectPage = (state) => selectPeopleListState(state).page;
export const selectTotalPages = (state) =>
  selectPeopleListState(state).totalPages;
export const selectTotalResults = (state) =>
  selectPeopleListState(state).totalResults;
export const selectPeople = (state) => selectPeopleListState(state).people;
export const selectQuery = (state) => selectPeopleListState(state).query;
export const selectStatus = (state) => selectPeopleListState(state).status;

export default peopleListSlice.reducer;
