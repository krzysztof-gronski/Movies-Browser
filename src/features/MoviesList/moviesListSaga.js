import { call, put, takeLatest } from "redux-saga/effects";
import { getPopularMoviesData } from "../api/apiData";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from "./moviesListSlice";

function* fetchMoviesSaga() {
  try {
    yield put(fetchMovies());
    const movies = yield call(getPopularMoviesData);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesFailure(error.message));
  }
}

function* moviesListSaga() {
  yield takeLatest(fetchMovies, fetchMoviesSaga);
}

export default moviesListSaga;
