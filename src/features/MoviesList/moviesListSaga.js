import {
  call,
  put,
  select,
  delay,
  debounce,
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
    const query = yield select(selectQuery);
    let movies;
    if (query !== "") {
      movies = yield call(searchMovie, query, page);
    } else {
      movies = yield call(getMovies, page);
    }
    const genres = yield call(getGenres);
    if (movies.length < 1 || genres.length < 1) {
      throw new Error();
    }
    yield put(fetchMoviesSuccess({ movies, genres }));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* moviesListSaga() {
  yield debounce(1000, fetchMovies.type, fetchMoviesHandler);
}
