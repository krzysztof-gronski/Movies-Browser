import {
  call,
  put,
  select,
  takeEvery,
  delay,
  takeLatest,
  debounce,
} from "redux-saga/effects";
import {
  getGenres,
  getMovies,
  searchMovie,
} from "../api/apiData";
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
    let movies;
    if (query !== "") {
      movies = yield call(searchMovie, query );
    } else {
      movies = yield call(getMovies, page);
    }
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError());
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
