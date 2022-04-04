import { CallInfo } from "./../interfaces/calls/CallInfo";
import axios from "axios";
import UrlJoin from "url-join";
import { config } from "../config";

const GET_LIST_API = UrlJoin(config.apiServerURL, "getList");
const GET_RECORD_API = UrlJoin(config.apiServerURL, "getRecord");

export const GetList = (date?: string): Promise<CallInfo[]> => {
  const callsApi = date
    ? UrlJoin(GET_LIST_API, `?date_start=${date}`, `&date_end=${date}`)
    : GET_LIST_API;
  return axios.post<CallInfo[]>(callsApi).then((res) => res.data);
};

export const GetRecord = (
  recordId: string,
  partnershipId: string
): Promise<Blob> => {
  const recordApi = UrlJoin(
    GET_RECORD_API,
    `?record=${recordId}`,
    `&partnership_id=${partnershipId}`
  );

  return axios
    .post<Blob>(recordApi, {}, { responseType: "blob" })
    .then((res) => {
      return res.data;
    });
};
