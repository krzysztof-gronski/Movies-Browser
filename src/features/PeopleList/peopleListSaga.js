import { call, put, debounce, select, takeLatest } from "redux-saga/effects";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
  fetchSearchPeople,
  setStatus,
} from "./peopleListSlice";
import { getPeople, searchPerson } from "../api/apiData";
import {
  selectInputQuery,
  selectInputRef,
  selectURLQuery,
  setInputQuery,
  setQueryLabel,
} from "../../common/Navigation/navigationSlice";

function* fetchPeopleHandler({ payload: page }) {
  try {
    const status = "loading";
    yield put(setStatus({ status }));
    const urlQuery = yield select(selectURLQuery);
    const inputQuery = yield select(selectInputQuery);
    const inputRef = yield select(selectInputRef);
    let people;
    if (urlQuery !== "") {
      people = yield call(searchPerson, urlQuery, page);
    } else {
      people = yield call(getPeople, page);
    }
    if (people.length < 1) {
      throw new Error();
    }

    yield put(setQueryLabel({ queryLabel: urlQuery }));
    yield put(fetchPeopleSuccess(people));
    if (inputQuery) {
      const query = "";
      yield put(setInputQuery({ query }));
    } else {
    }

    
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* peopleListSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
  yield debounce(2000, fetchSearchPeople.type, fetchPeopleHandler);
}
