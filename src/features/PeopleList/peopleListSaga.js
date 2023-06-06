import {
  call,
  put,
  debounce,
  select,
  takeLatest,
  delay,
} from "redux-saga/effects";
import {
  selectPage,
  selectQuery,
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
  peopleListReloadDebounce,
} from "./peopleListSlice";
import { getPeople, searchPerson } from "../api/apiData";

function* fetchPeopleHandler() {
  try {
    const page = yield select(selectPage);
    const query = yield select(selectQuery);
    let people;
    if (query !== "") {
      people = yield call(searchPerson, query, page);
    } else {
      people = yield call(getPeople, page);
    }
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* peopleListReloadDebounceHandler() {
  try {
    yield window.location.reload();
  } catch (error) {}
}

export function* peopleListSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
  yield debounce(2000,peopleListReloadDebounce.type, peopleListReloadDebounceHandler);
}
