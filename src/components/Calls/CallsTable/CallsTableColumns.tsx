import "antd/dist/antd.css";
import "./index.css";
import { Avatar, Button } from "antd";
import { MdSouthWest, MdNorthEast } from "react-icons/md";
import { CallInfo } from "../../../interfaces/calls/CallInfo";
import { getTwoSymbolsNumber } from "../../../helpers/NumberHelper";

interface Props {
  showModal: (record: string, partnershipId: string) => void;
}

export const CallsTableColumns = (props: Props) => {
  const { showModal } = props;
  return [
    {
      title: "Тип",
      align: "center" as "center",
      width: "10%",
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
      onFilter: (value: string | number | boolean, callInfo: CallInfo) =>
        callInfo.in_out === value,
      render: (callInfo: CallInfo) => {
        if (callInfo.in_out === "1") {
          return <MdSouthWest color={"blue"} size={"20px"} />;
        }
        if (callInfo.in_out === "0") {
          return callInfo.status !== "" ? (
            <MdNorthEast color={"green"} size={"20px"} />
          ) : (
            <MdNorthEast color={"red"} size={"20px"} />
          );
        }
        if (callInfo.in_out === "3") {
          return <MdNorthEast color={"red"} size={"20px"} />;
        }
        return;
      },
    },
    {
      title: "Время",
      dataIndex: "date",
      key: "time",
      width: "10%",
      sorter: (a: CallInfo, b: CallInfo) =>
        Date.parse(a.date) - Date.parse(b.date),
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
      width: "15%",
      render: (person_avatar: string) => {
        return <Avatar src={person_avatar} size="large" />;
      },
    },
    {
      title: "Звонок",
      dataIndex: "from_number",
      key: "call",
      width: "25%",
    },
    {
      title: "Источник",
      dataIndex: "contact_company",
      key: "source",
      width: "20%",
      sorter: (a: CallInfo, b: CallInfo) =>
        a.contact_company.localeCompare(b.contact_company),
    },
    {
      title: "Запись",
      key: "record",
      width: "15%",
      sorter: (a: CallInfo, b: CallInfo) => a.record.localeCompare(b.record),
      render: (callInfo: CallInfo) => {
        return callInfo.record && callInfo.partnership_id ? (
          <Button
            type="primary"
            onClick={() => showModal(callInfo.record, callInfo.partnership_id)}
          >
            Прослушать запись
          </Button>
        ) : undefined;
      },
    },
    {
      title: "Длительность",
      dataIndex: "time",
      key: "duration",
      align: "right" as "right",
      sorter: (a: CallInfo, b: CallInfo) => +(a.time || 0) - +(b.time || 0),
      render: (time: string) => {
        const seconds = +time % 60;
        const minutes = Math.floor(+time / 60);
        return `${getTwoSymbolsNumber(minutes)}:${getTwoSymbolsNumber(
          seconds
        )}`;
      },
    },
  ];
};
