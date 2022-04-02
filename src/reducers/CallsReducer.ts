import { CallsState } from "../states/calls/CallsState";
import { Reducer } from "redux";
import { AllCallsActions, callsAction } from "../actions/CallsActions";
import { getType } from "typesafe-actions";

export const initialState: CallsState = {
  callsList: [],
  isDataLoading: false,
};

export const reducer: Reducer<CallsState, AllCallsActions> = (
  state = initialState,
  action
): CallsState => {
  switch (action.type) {
    case getType(callsAction.callsListLoad.success): {
      return {
        ...state,
        isDataLoading: false,
        callsList: action.payload,
      };
    }
    case getType(callsAction.callsListLoad.request):
      return { ...state, isDataLoading: true };
    case getType(callsAction.callsListLoad.failure):
      return { ...state, isDataLoading: false };

    default:
      return state;
  }
};
