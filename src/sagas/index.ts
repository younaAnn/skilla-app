import { all } from "redux-saga/effects";
import { callsWatcherSaga } from "./CallsSaga";

export function* rootSaga() {
  yield all([callsWatcherSaga()]);
}
