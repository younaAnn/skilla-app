import React, { useCallback, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { CallsHeaderComponent } from "./CallsHeader/CallsHeaderComponent";
import { CallsTableComponent } from "./CallsTable/CallsTableComponent";
import { useDispatch, useSelector } from "react-redux";
import { callsAction } from "../../actions/CallsActions";
import moment, { Moment } from "moment";
import { RootState } from "../../states/RootState";
import { Spin } from "antd";
import { Content } from "antd/lib/layout/layout";

const DATE_API_FORMAT = "YYYY-MM-DD";

const dataSelector = (state: RootState) => ({
  isLoading: state.callsState.isDataLoading,
});

export const CallsComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const { isLoading } = useSelector(dataSelector);
  const dispatch = useDispatch();

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
      <Content style={{ margin: "4% 7%" }}>
        <div className="site-layout-background" style={{ minHeight: "100px" }}>
          {isLoading ? (
            <Spin
              tip="Загрузка..."
              style={{ display: "block", paddingTop: "2%" }}
            />
          ) : (
            <CallsTableComponent />
          )}
        </div>
      </Content>
    </>
  );
};
