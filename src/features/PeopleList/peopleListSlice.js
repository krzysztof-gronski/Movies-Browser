import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
  name: "peopleList",
  initialState: {
    people: [],
    status: "loading",
    page: 1,
    totalPages: null,
  },
  reducers: {
    fetchPeople: (state, { payload: page }) => {
      state.page = page;
    },
    fetchPeopleSuccess: (state, { payload: people }) => {
      state.people = people.results;
      state.status = "success";
      state.page = people.page;
      state.totalPages = people.total_pages;
    },
    fetchPeopleError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchPeople, fetchPeopleSuccess, fetchPeopleError } =
  peopleListSlice.actions;

export const selectPeopleListState = (state) => state.people;
export const selectPeople = (state) => selectPeopleListState(state).people;
export const selectStatus = (state) => selectPeopleListState(state).status;
export const selectPage = (state) => selectPeopleListState(state).page;
export const selectTotalPages = (state) =>
  selectPeopleListState(state).totalPages;
export default peopleListSlice.reducer;
