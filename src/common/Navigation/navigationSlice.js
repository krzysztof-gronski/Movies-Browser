import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    inputQuery: "",
    urlQuery: "",
    queryLabel: "",
    inputRef: null,
    previousPage: "",
  },
  reducers: {
    setInputQuery: (state, { payload }) => {
      state.inputQuery = payload.inputQuery;
      //state.status = "loading";
    },
    setURLQuery: (state, { payload }) => {
      state.urlQuery = payload.urlQuery;
      //state.status = "loading";
    },
    setQueryLabel: (state, { payload }) => {
      state.queryLabel = payload.queryLabel;
      //state.status = "loading";
    },
    setInputRef: (state, { payload: search }) => {
      //console.log(search.inputRef);
      state.inputRef = search.inputRef;
    },
    setPreviousPage: (state, { payload }) => {
      //console.log(search.inputRef);
      state.previousPage = payload.previousPage;
    },
  },
});
export const {
  setInputQuery,
  setURLQuery,
  setQueryLabel,
  setInputRef,
  setPreviousPage,
} = navigationSlice.actions;

export const selectNavigationState = (state) => state.navigation;
export const selectInputRef = (state) => selectNavigationState(state).inputRef;
export const selectInputQuery = (state) =>
  selectNavigationState(state).inputQuery;
export const selectURLQuery = (state) => selectNavigationState(state).urlQuery;
export const selectQueryLabel = (state) =>
  selectNavigationState(state).queryLabel;
  export const selectPreviousPage = (state) =>
  selectNavigationState(state).previousPage;

export default navigationSlice.reducer;
