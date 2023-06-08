import { call, debounce, put, select, takeLatest } from "redux-saga/effects";
import { reloadPage, selectQuery, setQuery } from "./navigationSlice";

function* reloadPageHandler({payload}) {
  try {
    
    // yield call(window.location.reload,false);
    //yield window.location="https://wp.pl";
    const query = payload.query;//yield select(selectQuery);
    console.log(query);
    //yield call(console.log, query);
    yield put(setQuery({ query }));
    window.location.reload();
  } catch (error) {}
}

// function* setQueryHandler() {
//   try {
   
//     window.location.reload();
//   } catch (error) {}
// }

export function* navigationSaga() {
  yield debounce(2000, reloadPage.type, reloadPageHandler);
  //yield takeLatest(setQuery.type, setQueryHandler);
}
