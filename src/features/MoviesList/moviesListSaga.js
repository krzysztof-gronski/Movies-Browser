import {
  call,
  put,
  select,
  takeEvery,
  delay,
  takeLatest,
  debounce,
} from "redux-saga/effects";
import { getGenres, getMovies, searchMovie } from "../api/apiData";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchGenres,
  fetchMoviesError,
  selectQuery,
} from "./moviesListSlice";

export function* fetchMoviesHandler({ payload: page }) {
  try {
    yield delay(1000);
    const query = yield select(selectQuery);
    yield call(console.log,"q"+query);
    let movies;
    if (query !== "") {
      movies = yield call(searchMovie, query, page);
    } else {
      movies = yield call(getMovies, page);
    }
    const genres = yield call(getGenres);
    yield put(fetchMoviesSuccess({ movies, genres }));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* moviesListSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
