import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { CallsHeaderComponent } from "./CallsHeader/CallsHeaderComponent";
import { CallsTableComponent } from "./CallsTableComponent";
import { useDispatch } from "react-redux";
import { callsAction } from "../../actions/CallsActions";

export const CallsComponent: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callsAction.callsListLoad.request());
  }, [dispatch]);

  return (
    <>
      <CallsHeaderComponent />
      <CallsTableComponent />
    </>
  );
};
