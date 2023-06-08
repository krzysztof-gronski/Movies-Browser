import {
  call,
  put,
  select,
  delay,
  takeLatest,
} from "redux-saga/effects";
import { getGenres, getMovies, searchMovie } from "../api/apiData";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  selectQuery,
} from "./moviesListSlice";

export function* fetchMoviesHandler({ payload: page }) {
  try {
    yield delay(1000);
    const query = yield select(selectQuery);
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
  yield debounce(1000, fetchMovies.type, fetchMoviesHandler);
}
