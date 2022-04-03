import { ActionType, createAsyncAction } from "typesafe-actions";
import { CallInfo } from "../interfaces/calls/CallInfo";

export const callsAction = {
  callsListLoad: createAsyncAction(
    "[CallsActionType] CALLS_LOAD_REQUEST",
    "[CallsActionType] CALLS_LOAD_SUCCESS",
    "[CallsActionType] CALLS_LOAD_FAILURE"
  )<{ date?: string }, CallInfo[], undefined>(),
};

export type AllCallsActions = ActionType<typeof callsAction>;
