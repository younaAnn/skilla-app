import React, { useCallback, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { CallsHeaderComponent } from "./CallsHeader/CallsHeaderComponent";
import { CallsTableComponent } from "./CallsTable/CallsTableComponent";
import { useDispatch } from "react-redux";
import { callsAction } from "../../actions/CallsActions";
import moment, { Moment } from "moment";

const DATE_API_FORMAT = "YYYY-MM-DD";

export const CallsComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(moment());

  useEffect(() => {
    dispatch(
      callsAction.callsListLoad.request({
        date: moment().format(DATE_API_FORMAT),
      })
    );
  }, [dispatch]);

  const onDateChange = useCallback(
    (value: Moment | null) => {
      setSelectedDate(value || moment());
      const date = value?.format(DATE_API_FORMAT);
      dispatch(callsAction.callsListLoad.request({ date }));
    },
    [dispatch]
  );

  return (
    <>
      <CallsHeaderComponent
        selectedDate={selectedDate}
        onChange={onDateChange}
      />
      <CallsTableComponent />
    </>
  );
};
