import React, { useCallback, useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Button, Modal, Spin, Typography } from "antd";
import * as CallsService from "../../../service/CallsService";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface Props {
  visible: boolean;
  recordId: string;
  partnershipId: string;
  onClose: () => void;
}

const { Text } = Typography;

const useRecordQuery = (recordId: string, partnershipId: string) => {
  const [isRecordLoading, setIsRecordLoading] = useState(false);
  const [record, setRecord] = useState<string | null>(null);

  useEffect(() => {
    if (!recordId || !partnershipId) {
      return;
    }
    setIsRecordLoading(true);
    (async () => {
      const blob = await CallsService.GetRecord(recordId, partnershipId);
      const record = URL.createObjectURL(blob);
      setRecord(record);
      console.log(record);
      setIsRecordLoading(false);
    })();
  }, [partnershipId, recordId]);

  const clearRecord = useCallback(() => {
    setRecord(null);
  }, [setRecord]);

  return { isRecordLoading, record, clearRecord };
};

export const RecordModalComponent: React.FC<Props> = (props) => {
  const { visible, recordId, partnershipId, onClose } = props;
  const { isRecordLoading, record, clearRecord } = useRecordQuery(
    recordId,
    partnershipId
  );

  const onCloseModal = useCallback(() => {
    clearRecord();
    onClose();
  }, [onClose, clearRecord]);

  return (
    <Modal
      title="Прослушивание записи"
      visible={visible}
      onCancel={onCloseModal}
      footer={[
        <Button key="close" onClick={onCloseModal}>
          Закрыть
        </Button>,
      ]}
    >
      {isRecordLoading ? (
        <Spin tip="Загрузка..." style={{ display: "block" }} />
      ) : record ? (
        <AudioPlayer src={record} autoPlay={false} />
      ) : (
        <Text>Запись не найдена</Text>
      )}
    </Modal>
  );
};
