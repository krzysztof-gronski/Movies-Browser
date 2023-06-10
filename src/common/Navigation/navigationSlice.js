import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    inputRef: null,
  },
  reducers: {
    setInputRef: (state, { payload: search }) => {
      //console.log(search.inputRef);
      //state.inputRef = search.inputRef;
    },
  },
});
export const {
  setInputRef,
} = navigationSlice.actions;

export const selectNavigationState = (state) => state.navigation;
export const selectInputRef = (state) => selectNavigationState(state).inputRef;

export default navigationSlice.reducer;
