import { CallInfo } from "../../interfaces/calls/CallInfo";

export interface CallsState {
  callsList: CallInfo[];
  isDataLoading: boolean;
}
