import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../states/RootState";
import { CallsTableColumns } from "./CallsTableColumns";
import { RecordModalComponent } from "./RecordModalComponent";

const dataSelector = (state: RootState) => ({
  callsList: state.callsState.callsList,
});

export const CallsTableComponent: React.FC = () => {
  //TODO adapt for small screens
  const { callsList } = useSelector(dataSelector);
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [recordId, setRecordId] = useState<string>("");
  const [partnershipId, setPartnershipId] = useState<string>("");

  const showModal = (record: string, partnershipId: string) => {
    setIsModalOpened(true);
    setRecordId(record);
    setPartnershipId(partnershipId);
  };

  const onCloseModal = () => {
    setIsModalOpened(false);
    setRecordId("");
    setPartnershipId("");
  };

  return (
    <>
      <RecordModalComponent
        visible={isModalOpened}
        recordId={recordId}
        partnershipId={partnershipId}
        onClose={onCloseModal}
      />
      <Table
        columns={CallsTableColumns({ showModal })}
        dataSource={callsList}
        rowKey={"id"}
      />
    </>
  );
};
