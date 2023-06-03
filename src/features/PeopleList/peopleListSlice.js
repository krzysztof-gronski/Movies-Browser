import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
  name: "peopleList",
  initialState: {
    query: "",
    page: 1,
    totalPages: null,
    totalResults: 0,
    people: [],
    status: "loading",
  },
  reducers: {
    fetchPeople: (state, { payload: page }) => {
      state.page = page;
      state.status = "loading";
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
    setQuery: (state, { payload }) => {
      state.query = payload.query;
      state.status = "loading";
    },
  },
});
export const { fetchPeople, fetchPeopleSuccess, fetchPeopleError, setQuery } =
  peopleListSlice.actions;

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
