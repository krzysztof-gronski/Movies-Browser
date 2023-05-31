import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  getMovieId,
  selectMovieId,
  fetchCredits,
  fetchMovieCredits,
  fetchMovieDetails,
} from "./movieDetailsSlice";
import { getMovieCredits, getMovieDetails } from "../api/apiData";

export function* fetchMovieDetailsHandler() {
  try {
    const id = yield select(selectMovieId);
    yield call(console.log, id);
    const details = yield call(getMovieDetails, id);
    const credits = yield call(getMovieCredits, id);
    yield put(fetchMovieDetailsSuccess({ details, credits }));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}


function* fetchCreditsHandler() {
  try {
    const id = yield select(selectMovieId);
    const credits = yield call(getMovieCredits, { movieId: id });
    yield put(fetchMovieCredits(credits));
  } catch (error) {
    yield call(alert, error);
  }
}


export function* movieDetailsSaga() {
  yield takeLatest(getMovieId.type, fetchMovieDetailsHandler);
  yield takeLatest(fetchMovieCredits.type, fetchCreditsHandler);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}