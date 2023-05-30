import { call, put, takeLatest } from "redux-saga/effects";
import { getMovies } from "./getMovies";
import { fetchMovies, fetchMoviesSuccess } from "./moviesListSlice";

export function* fetchMoviesHandler({ payload: page }) {
  try {
    const movies = yield call(getMovies, page);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield call(alert, error);
  }
}

export function* moviesListSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
