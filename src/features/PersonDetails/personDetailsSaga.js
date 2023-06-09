import { call, put, takeLatest, select, debounce } from "redux-saga/effects";
import {
  fetchPersonDetailsSuccess,
  selectPersonId,
  fetchPersonDetailsError,
  getDetailsForPerson,
  personInputDelay,
} from "./personDetailsSlice";
import { getGenres, getPersonDetails, getPersonCredits } from "../api/apiData";
import {
  setInputQuery,
  setPreviousPage,
} from "../../common/Navigation/navigationSlice";

function* fetchPersonDetailsHandler() {
  try {
    const id = yield select(selectPersonId);
    const genres = yield call(getGenres);
    const details = yield call(getPersonDetails, id);
    const credits = yield call(getPersonCredits, id);

    if (genres.length < 1 || details.length < 1 || !credits) {
      throw new Error();
    }

    yield put(fetchPersonDetailsSuccess({ details, credits, genres }));

    const pageName = "person";
    yield put(setPreviousPage({ previousPage: pageName }));
    
  } catch (error) {
    yield put(fetchPersonDetailsError());
  }
}

function* inputDelayHandler({ payload }) {
  try {
    const inputQuery = payload.inputRef.current.value;
    yield put(setInputQuery({ inputQuery }));
  } catch (error) {}
}

export function* personDetailsSaga() {
  yield takeLatest(getDetailsForPerson.type, fetchPersonDetailsHandler);
  yield debounce(1000, personInputDelay.type, inputDelayHandler);
}
