import { call, put, takeLatest, select, debounce } from "redux-saga/effects";
import {
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  selectMovieId,
  fetchMovieDetails,
  inputDelay,
} from "./movieDetailsSlice";
import { getMovieCredits, getMovieDetails } from "../api/apiData";
import { setInputQuery, setPreviousPage } from "../../common/Navigation/navigationSlice";

function* fetchMovieDetailsHandler() {
  try {
    const id = yield select(selectMovieId);
    const details = yield call(getMovieDetails, id);
    const credits = yield call(getMovieCredits, id);
    if (credits.length < 1 || details.length < 1) {
      throw new Error();
    }
    yield put(fetchMovieDetailsSuccess({ details, credits }));
    const pageName="movie";
    yield put(setPreviousPage({previousPage: pageName}));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

function* inputDelayHandler({ payload }) {
  try {
    const inputQuery = payload.inputRef.current.value;
    yield put(setInputQuery({inputQuery}));
    
  } catch (error) {
  }
}

export function* movieDetailsSaga() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield debounce(1000, inputDelay.type, inputDelayHandler);
}
