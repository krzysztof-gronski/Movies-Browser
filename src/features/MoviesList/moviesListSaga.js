import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getMovies } from "./getMovies";
import { fetchMovies, fetchMoviesSuccess } from "./moviesListSlice";
import { tmdbApi } from "../api/apiData";

export function* fetchMoviesHandler({ payload: page }) {
  try {
    delay(20000);
    const movies = yield call(getMovies, page);
    const { data } = yield call(tmdbApi.getGenresData);
    const genres = data.genres;
    yield put(fetchMoviesSuccess({ movies, genres }));
  } catch (error) {
    yield call(alert, error);
  }
}

export function* moviesListSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
