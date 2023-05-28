import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMoviesSuccess, fetchMoviesError, fetchGenres } from "./moviesListSlice";
import { tmdbApi } from "../api/apiData";

function* fetchMoviesHandler() {
  try {
    const movies = yield call(tmdbApi.getPopularMoviesData());
    yield put(fetchMoviesSuccess({movies}));
  } catch (error) {
    yield put(fetchMoviesError());
    console.log(error.message);
  }
}

function* searchMoviesHandler(query) {
  try {
    const movies = yield call(tmdbApi.searchMoviesData(), query);
    yield put(fetchMoviesSuccess({movies}));
  } catch (error) {
    yield put(fetchMoviesError());
    console.log(error.message);
  }
}

function* fetchGenresHandler() {
  try {
    const genres = yield call(tmdbApi.getGenresData());
   yield put(fetchGenres({genres}));
  } catch (error) {
    console.error("Error getting genres:", error);
  }
}


function* moviesListSaga() {
  yield takeLatest(getPopularMoviesData.type, fetchMoviesHandler);
  yield takeLatest(searchMoviesData.type, searchMoviesHandler);
  yield takeLatest(getGenresData.type, fetchGenresHandler);
}

export default moviesListSaga;