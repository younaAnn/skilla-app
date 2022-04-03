import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Table, Avatar } from "antd";
import { MdSouthWest, MdNorthEast } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../../states/RootState";
import { CallInfo } from "../../interfaces/calls/CallInfo";
import { getTwoSymbolsNumber } from "../../helpers/NumberHelper";

const { Content } = Layout;

const dataSelector = (state: RootState) => ({
  callsList: state.callsState.callsList,
});

export const CallsTableComponent: React.FC = () => {
  //TODO adapt for small screens

  const { callsList } = useSelector(dataSelector);

  const columns = [
    {
      title: "Тип",
      align: "center" as "center",
      filters: [
        {
          text: "Входящие",
          value: "1",
        },
        {
          text: "Исходящие",
          value: "0",
        },
      ],
      onFilter: (value: string | number | boolean, record: CallInfo) =>
        record.in_out === value,
      render: (record: CallInfo) => {
        if (record.in_out === "1") {
          return <MdSouthWest color={"blue"} size={"20px"} />;
        }
        if (record.in_out === "0") {
          return record.status !== "" ? (
            <MdNorthEast color={"green"} size={"20px"} />
          ) : (
            <MdNorthEast color={"red"} size={"20px"} />
          );
        }
        if (record.in_out === "3") {
          return <MdNorthEast color={"red"} size={"20px"} />;
        }
        return;
      },
    },
    {
      title: "Время",
      dataIndex: "date",
      key: "time",
      render: (date: string) => {
        const parsedDate = new Date(date);
        return parsedDate
          ? `${getTwoSymbolsNumber(
              parsedDate.getHours()
            )}:${getTwoSymbolsNumber(parsedDate.getMinutes())}`
          : "";
      },
    },
    {
      title: "Сотрудник",
      dataIndex: "person_avatar",
      key: "employee",
      render: (person_avatar: string) => {
        return <Avatar src={person_avatar} size="large" />;
      },
    },
    {
      title: "Звонок",
      dataIndex: "from_number",
      key: "call",
    },
    {
      title: "Источник",
      dataIndex: "contact_company",
      key: "source",
    },
    {
      title: "Длительность",
      dataIndex: "time",
      key: "duration",
      align: "right" as "right",
      render: (time: string) => {
        const seconds = +time % 60;
        const minutes = Math.floor(+time / 60);
        return `${getTwoSymbolsNumber(minutes)}:${getTwoSymbolsNumber(
          seconds
        )}`;
      },
    },
  ];

  return (
    <Content style={{ margin: "4% 7%" }}>
      <div className="site-layout-background">
        <Table columns={columns} dataSource={callsList} rowKey={"id"} />
      </div>
    </Content>
  );
};
