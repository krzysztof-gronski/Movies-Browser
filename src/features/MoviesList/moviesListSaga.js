import { call, put, select, delay, takeLatest, debounce } from "redux-saga/effects";
import { getGenres, getMovies, searchMovie } from "../api/apiData";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  selectQuery,
  moviesListReloadDebounce,
  setQuery,
} from "./moviesListSlice";
import { useQueryParameter } from "../../common/Search/queryParameters";

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

export function* moviesListReloadDebounceHandler() {
  try {
    //const query = useQueryParameter("search");
    //yield put(setQuery(query ? { query: query } : { query: "" }));
    window.location.reload();
  } catch (error) {}
}

export function* moviesListSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
  yield debounce(2000,moviesListReloadDebounce.type, moviesListReloadDebounceHandler);
}
