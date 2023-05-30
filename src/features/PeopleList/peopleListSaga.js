import { call, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "./getPopularPeople";
import { fetchPeople, fetchPeopleSuccess } from "./peopleListSlice";

export function* fetchPeopleListHandler({ payload: page }) {
  try {
    const people = yield call(getPopularPeople, page);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield call(alert, error);
  }
}

export function* peopleListSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleListHandler);
}
