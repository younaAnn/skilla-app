import { CallInfo } from "./../interfaces/calls/CallInfo";
import axios from "axios";
import UrlJoin from "url-join";
import { config } from "../config";

const API = UrlJoin(config.apiServerURL, "getList");

export const GetList = (date?: string): Promise<CallInfo[]> => {
  const callsApi = date
    ? UrlJoin(API, `?date_start=${date}`, `&date_end=${date}`)
    : API;
  return axios.post<CallInfo[]>(callsApi).then((res) => res.data);
};
