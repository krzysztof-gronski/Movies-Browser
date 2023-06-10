import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    inputQuery: "",
    urlQuery: "",
    queryLabel: "",
    inputRef: null,
  },
  reducers: {
    setInputQuery: (state, { payload }) => {
      state.inputQuery = payload.inputQuery;
      state.inputRef = payload.inputRef;
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
      //state.inputRef = search.inputRef;
    },
  },
});
export const {
  setInputQuery,
  setURLQuery,
  setQueryLabel,
  setInputRef,
} = navigationSlice.actions;

export const selectNavigationState = (state) => state.navigation;
export const selectInputRef = (state) => selectNavigationState(state).inputRef;
export const selectInputQuery = (state) =>
  selectNavigationState(state).inputQuery;
export const selectURLQuery = (state) => selectNavigationState(state).urlQuery;
export const selectQueryLabel = (state) =>
  selectNavigationState(state).queryLabel;

export default navigationSlice.reducer;
