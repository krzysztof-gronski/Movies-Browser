import {
  call,
  put,
  select,
  delay,
  debounce,
  takeLatest,
} from "redux-saga/effects";
import { getGenres, getMovies, searchMovie } from "../api/apiData";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  selectQuery,
  setStatus,
  fetchSearchMovies,
  selectURLQuery,
} from "./moviesListSlice";

function* fetchMoviesHandler({ payload: page }) {
  try {
    const status = "loading";
    yield put(setStatus({ status }));
    //yield delay(2000);
    const urlQuery = yield select(selectURLQuery);
    let movies;
    if (urlQuery !== "") {
      movies = yield call(searchMovie, urlQuery, page);
    } else {
      movies = yield call(getMovies, page);
    }
    const genres = yield call(getGenres);
    if (movies.length < 1 || genres.length < 1) {
      throw new Error();
    }
    const query = urlQuery;
    yield put(fetchMoviesSuccess({ movies, genres, query }));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* moviesListSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
  yield debounce(1000, fetchSearchMovies.type, fetchMoviesHandler);
}
