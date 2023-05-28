import { call, put, takeLatest } from "redux-saga/effects";
import { tmdbApi } from "../api/apiData";
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
} from "./moviesListSlice";

export const getPopularMoviesData = () => async (dispatch) => {
  try {
    dispatch(fetchMovies());
    const movies = await tmdbApi.getPopularMoviesData();
    dispatch(fetchMoviesSuccess(movies));
  } catch (error) {
    dispatch(fetchMoviesError(error.message));
  }
};
export const searchMoviesData = (query) => async (dispatch) => {
  try {
    dispatch(fetchMovies());
    const movies = await tmdbApi.searchMoviesData(query);
    dispatch(fetchMoviesSuccess(movies));
  } catch (error) {
    dispatch(fetchMoviesError(error.message));
  }
};

function* fetchMoviesSaga() {
  try {

    const movies = yield call(tmdbApi.getPopularMoviesData);
    yield put(fetchMoviesSuccess({movies}));
  } catch (error) {
    yield put(fetchMoviesError())
    yield console.log(error.message);
  }
}

function* moviesListSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesSaga);
}

export default moviesListSaga;
