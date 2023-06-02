import { all } from "redux-saga/effects";
import { moviesListSaga } from "../features/MoviesList/moviesListSaga";
import { movieDetailsSaga } from "../features/MovieDetails/movieDetailsSaga";
import { personDetailsSaga } from "../features/PersonDetails/personDetailsSaga";

export default function* rootSaga() {
  yield all([moviesListSaga(), movieDetailsSaga(), personDetailsSaga()]);
}
