import { call, put, select, debounce, takeLatest } from "redux-saga/effects";
import { getGenres, getMovies, searchMovie } from "../api/apiData";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  setStatus,
  fetchSearchMovies,
} from "./moviesListSlice";
import {
  selectInputQuery,
  selectPreviousPage,
  selectURLQuery,
  setInputQuery,
  setPreviousPage,
  setQueryLabel,
} from "../../common/Navigation/navigationSlice";

function* fetchMoviesHandler({ payload: page }) {
  try {
    const status = "loading";
    yield put(setStatus({ status }));
    const urlQuery = yield select(selectURLQuery);
    const inputQuery = yield select(selectInputQuery);
    let pageName = yield select(selectPreviousPage);

    if (!inputQuery) {
      pageName = "movies" + new Date().toString();
    }

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

    yield put(setQueryLabel({ queryLabel: urlQuery }));
    yield put(fetchMoviesSuccess({ movies, genres }));
    if (inputQuery) {
      const query = "";
      yield put(setInputQuery({ query }));
    } else {
    }
    yield put(setPreviousPage({ previousPage: pageName }));
    
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* moviesListSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
  yield debounce(1000, fetchSearchMovies.type, fetchMoviesHandler);
}
