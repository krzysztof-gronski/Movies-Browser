import { call, put, takeLatest, select, delay } from "redux-saga/effects";
import {
  fetchPersonDetailsSuccess,
  selectPersonId,
  fetchPersonDetailsError,
  getDetailsForPerson,
} from "./personDetailsSlice";
import { getGenres, getPersonDetails, getPersonCredits } from "../api/apiData";

function* fetchPersonDetailsHandler() {
  try {
    yield delay(1000);
    const id = yield select(selectPersonId);
    const genres = yield call(getGenres);
    const details = yield call(getPersonDetails, id);
    const credits = yield call(getPersonCredits, { personId: id });
    console.log(credits);
    if (genres.length < 1 || details.length < 1) {
      throw new Error();
    }
    yield put(fetchPersonDetailsSuccess({ details, credits, genres }));
  } catch (error) {
    yield call(console.log, "putError");
    yield put(fetchPersonDetailsError());
  }
}

export function* personDetailsSaga() {
  yield takeLatest(getDetailsForPerson.type, fetchPersonDetailsHandler);
}
