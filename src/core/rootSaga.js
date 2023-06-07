import { all } from "redux-saga/effects";
import { moviesListSaga } from "../features/MoviesList/moviesListSaga";
import { movieDetailsSaga } from "../features/MovieDetails/movieDetailsSaga";
import { personDetailsSaga } from "../features/PersonDetails/personDetailsSaga";
import { peopleListSaga } from "../features/PeopleList/peopleListSaga";
import { navigationSaga } from "../common/Navigation/navigationSaga";

export default function* rootSaga() {
  yield all([
    moviesListSaga(),
    movieDetailsSaga(),
    peopleListSaga(),
    personDetailsSaga(),
    navigationSaga(),
  ]);
}
