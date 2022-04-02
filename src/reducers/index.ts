import { AllCallsActions } from "./../actions/CallsActions";
import { RootState } from "../states/RootState";
import * as CallsReducer from "./CallsReducer";
import { combineReducers, Reducer } from "redux";

export const initialState: RootState = {
  callsState: CallsReducer.initialState,
};

type AllActions = AllCallsActions;

export const createRootReducer: () => Reducer<RootState, AllActions> = () =>
  combineReducers({
    callsState: CallsReducer.reducer,
  });
