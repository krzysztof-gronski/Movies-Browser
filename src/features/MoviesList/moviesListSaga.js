import {
  call,
  put,
  select,
  takeEvery,
  delay,
  takeLatest,
} from "redux-saga/effects";
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

function* searchMoviesHandler({payload: query}) {
  try {
    const movies = yield call(searchMovies, query);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield call(alert, error);
  }
}

function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenres);
   yield put(fetchGenres(genres));
  } catch (error) {
    yield call(alert, error);
  }
}

export function* moviesListSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
