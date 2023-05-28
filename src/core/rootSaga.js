import { all } from "redux-saga/effects";
import { moviesListSaga } from "../features/MoviesList/moviesListSaga";

export default function* rootSaga() {
  yield all([
    moviesListSaga(),
]);
}
