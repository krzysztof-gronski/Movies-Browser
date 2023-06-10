import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  query: "",//localStorage.getItem("query"),
  initialState: {},
  reducers: {
    reloadPage: (state, { payload }) => {
    },
    setQuery: (state, { payload }) => {
      state.query = payload.query;
      //console.log("Q"+state.query);
    },
  },
  },
);
export const { reloadPage, setQuery } = navigationSlice.actions;

export const selectNavigationState = (state) => state.navigation;
export const selectQuery = (state) => selectNavigationState(state).query;

export default navigationSlice.reducer;
