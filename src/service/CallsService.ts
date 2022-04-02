import { CallInfo } from "./../interfaces/calls/CallInfo";
import axios from "axios";
import UrlJoin from "url-join";
import { config } from "../config";

const Api = UrlJoin(config.apiServerURL, "getList");

export const GetList = (): Promise<CallInfo[]> => {
  return axios.post<CallInfo[]>(Api).then((res) => res.data);
};
