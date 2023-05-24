import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
    name: "moviesList",
    initialState: {
    },
    reducers: {
    },
});
export const {
} = movieListSlice.actions;

export default moviesListSlice.reducer;