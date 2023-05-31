import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  getMovieId,
  selectMovieId,
  fetchCredits,
  fetchMovieCredits,
} from "./movieDetailsSlice";
import { getMovieCredits, getMovieDetails } from "../api/apiData";
import { fetchMovieDetails } from "../MoviesList/moviesListSlice";

function* fetchMovieDetailsHandler() {
  try {
    const id = yield select(selectMovieId);
    const details = yield call(getMovieDetails, { movieId: id });
    const credits = yield call(getMovieCredits, { movieId: id });
    yield put(fetchMovieDetailsSuccess({ details, credits }));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

/*
function* fetchCreditsHandler() {
  try {
    const id = yield select(selectMovieId);
    const credits = yield call(getMovieCredits, { movieId: id });
    yield put(fetchMovieCredits(credits));
  } catch (error) {
    yield call(alert, error);
  }
}
*/

export function* movieDetailsSaga() {
  yield takeLatest(getMovieId.type, fetchMovieDetailsHandler);
  // yield takeLatest(fetchMovieCredits.type, fetchCreditsHandler);
}
