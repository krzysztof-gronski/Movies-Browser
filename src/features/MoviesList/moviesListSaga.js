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
  setStatus,
  fetchSearchMovies,
} from "./moviesListSlice";
import {
  selectInputQuery,
  selectInputRef,
  selectURLQuery,
  setInputQuery,
  setQueryLabel,
} from "../../common/Navigation/navigationSlice";

function* fetchMoviesHandler({ payload: page }) {
  try {
    const status = "loading";
    yield put(setStatus({ status }));
    //yield delay(2000);
    const urlQuery = yield select(selectURLQuery);
    const inputQuery = yield select(selectInputQuery);
    const inputRef = yield select(selectInputRef);
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
    //yield call(console.log,urlQuery);
    yield put(setQueryLabel({ queryLabel: urlQuery }));
    yield put(fetchMoviesSuccess({ movies, genres }));
    if (inputQuery) {
      const query = "";
      yield put(setInputQuery({ query }));
    } else {
      //inputRef.current.value = "";
    }
  } catch (error) {
    yield put(fetchMoviesError());
    //console.log(error);
  }
}

export function* moviesListSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
  yield debounce(2000, fetchSearchMovies.type, fetchMoviesHandler);
}
