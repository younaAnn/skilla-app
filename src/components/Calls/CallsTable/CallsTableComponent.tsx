import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Table } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../states/RootState";
import { CallsTableColumns } from "./CallsTableColumns";

const { Content } = Layout;

const dataSelector = (state: RootState) => ({
  callsList: state.callsState.callsList,
});

export const CallsTableComponent: React.FC = () => {
  //TODO adapt for small screens

  const { callsList } = useSelector(dataSelector);

  return (
    <Content style={{ margin: "4% 7%" }}>
      <div className="site-layout-background">
        <Table
          columns={CallsTableColumns}
          dataSource={callsList}
          rowKey={"id"}
        />
      </div>
    </Content>
  );
};
