import { call, put, debounce, select } from "redux-saga/effects";
import {
  selectPage,
  selectQuery,
  fetchPeople,
  fetchPeopleError,
} from "./peopleListSlice";
import { getPeople, searchPerson } from "../api/apiData";

function* fetchPeopleHandler() {
  try {
    const page = yield select(selectPage);
    const query = yield select(selectQuery);
    let people;
    if (query !== "") {
      people = yield call(searchPerson, query);
    } else {
      people = yield call(getPeople,  page );
    }
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* peopleListSaga() {
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}