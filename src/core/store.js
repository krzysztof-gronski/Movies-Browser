import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import moviesReducer from "../features/MoviesList/moviesListSlice";
import movieDetailsReducer from "../features/MovieDetails/movieDetailsSlice"
import peopleListReducer from "../features/PeopleList/peopleListSlice"
import personDetailsReducer from "../features/PersonDetails/personDetailsSlice"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
    peopleList: peopleListReducer,
    personDetails: personDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
