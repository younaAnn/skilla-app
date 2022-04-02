import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Typography, Progress, Row, Col } from "antd";

const { Text } = Typography;

export const CallsStatisticComponent: React.FC = () => {
  const newCallsPercents = (20 * 100) / 30;

  return (
    <Row style={{ lineHeight: "normal", marginTop: "12px" }} align="middle">
      <Col span={8}>
        <div style={{ width: 170 }}>
          <Text>
            Новые звонки <span style={{ color: "green" }}>20 из 30 шт</span>
          </Text>
          <Progress
            percent={newCallsPercents}
            size="small"
            showInfo={false}
            strokeColor={"green"}
          />
        </div>
      </Col>

      <Col span={8}>
        <div style={{ width: 170 }}>
          <Text>
            Качество разговоров <span style={{ color: "orange" }}>40%</span>
          </Text>
          <Progress
            percent={40}
            size="small"
            showInfo={false}
            strokeColor={"orange"}
          />
        </div>
      </Col>

      <Col span={8}>
        <div style={{ width: 170 }}>
          <Text>
            Конверсия в заказ <span style={{ color: "red" }}>67%</span>
          </Text>
          <Progress
            percent={67}
            size="small"
            showInfo={false}
            strokeColor={"red"}
          />
        </div>
      </Col>
    </Row>
  );
};
