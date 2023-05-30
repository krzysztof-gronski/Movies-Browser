import { all } from "redux-saga/effects";
import { moviesListSaga } from "../features/MoviesList/moviesListSaga";
import { peopleListSaga } from "../features/PeopleList/peopleListSaga";

export default function* rootSaga() {
  yield all([
    moviesListSaga(),
    peopleListSaga(),
]);
}
