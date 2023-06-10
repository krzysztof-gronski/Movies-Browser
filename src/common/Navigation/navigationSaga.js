import { call, debounce, put, select, takeLatest } from "redux-saga/effects";
import { reloadPage, selectQuery, setQuery } from "./navigationSlice";

function* reloadPageHandler({payload}) {
  try {
    
    // yield call(window.location.reload,false);
    //yield window.location="https://wp.pl";
    //const query = yield select(selectQuery);
    //yield call(localStorage.setItem,{key:"query",value:query});
    const newURL = payload.newURL;//yield select(selectQuery);
    //yield call(console.log,query);
    window.history.pushState({}, null, newURL);
    window.location.reload();
    //yield call(console.log, query);
    //yield put(setQuery({ query }));
    //window.location.reload();
  } catch (error) {}
}

export function* navigationSaga() {
  yield debounce(2000, reloadPage.type, reloadPageHandler);
}
