import { CallInfo } from "./../interfaces/calls/CallInfo";
import { callsAction } from "./../actions/CallsActions";
import { all, call, put, takeLeading } from "redux-saga/effects";
import * as CallsService from "../service/CallsService";

export function* callsWatcherSaga() {
  yield all([loadSagaWrapper()]);
}

function* loadSagaWrapper() {
  yield takeLeading(callsAction.callsListLoad.request, loadSaga);
}

function* loadSaga() {
  try {
    const callsList: CallInfo[] = yield call(CallsService.GetList);
    yield put(callsAction.callsListLoad.success(callsList));
  } catch (e) {
    yield put(callsAction.callsListLoad.failure());
  }
}
