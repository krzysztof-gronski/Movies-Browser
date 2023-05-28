import { call, put, takeLatest } from "redux-saga/effects";
import { tmdbApi } from "../api/apiData";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
} from "./moviesListSlice";

function* fetchMoviesSaga() {
  try {
    yield put(fetchMovies());
    const movies = yield call(tmdbApi.getPopularMoviesData);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError(error));
  }
}

function* moviesListSaga() {
  yield takeLatest(fetchMovies, fetchMoviesSaga);
}

export default moviesListSaga;
