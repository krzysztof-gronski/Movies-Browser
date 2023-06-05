import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  fetchPersonDetailsSuccess,
  selectPersonId,
  fetchPersonDetailsError,
  getDetailsForPerson,
} from "./personDetailsSlice";
import { getGenres, getPersonDetails, getPersonCredits } from "../api/apiData";

function* fetchPersonDetailsHandler() {
  try {
    const id = yield select(selectPersonId);
    //const genres = yield call(getGenres);
    yield call (console.log,"ID-"+id);
    const details = yield call(getPersonDetails, id);
    const credits = yield call(getPersonCredits, { personId: id });
    yield put(fetchPersonDetailsSuccess({ details, credits }));
  } catch (error) {
    yield put(fetchPersonDetailsError());
  }
}

export function* personDetailsSaga() {
  yield takeLatest(getDetailsForPerson.type, fetchPersonDetailsHandler);
}