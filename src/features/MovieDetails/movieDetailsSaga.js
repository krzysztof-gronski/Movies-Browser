import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  getMovieId,
  selectMovieId,
  fetchMovieCredits,
  fetchMovieDetails,
} from "./movieDetailsSlice";
import { getMovieCredits, getMovieDetails } from "../api/apiData";

export function* fetchMovieDetailsHandler() {
  try {
    const id = yield select(selectMovieId);
    const details = yield call(getMovieDetails, id);
    const credits = yield call(getMovieCredits, id);
    if (credits.length < 1 || details.length < 1) {
      throw new Error();
    }
    yield put(fetchMovieDetailsSuccess({ details, credits }));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

function* fetchCreditsHandler() {
  try {
    const id = yield select(selectMovieId);
    const credits = yield call(getMovieCredits, { movieId: id });
    if (credits.length < 1 ) {
      throw new Error();
    }
    yield put(fetchMovieCredits(credits));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}


export function* movieDetailsSaga() {
  yield takeLatest(getMovieId.type, fetchMovieDetailsHandler);
  yield takeLatest(fetchMovieCredits.type, fetchCreditsHandler);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
