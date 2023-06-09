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
} from "./peopleListSlice";
import { getPeople, searchPerson } from "../api/apiData";

function* fetchPeopleHandler() {
  try {
    yield delay(1000);
    const page = yield select(selectPage);
    const query = yield select(selectQuery);
    let people;
    if (query !== "") {
      people = yield call(searchPerson, query, page);
    } else {
      people = yield call(getPeople, page);
    }
    if (people.length < 1 ) {
      throw new Error();
    }
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* peopleListSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
