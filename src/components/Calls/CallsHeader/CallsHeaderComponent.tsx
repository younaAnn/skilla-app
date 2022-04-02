import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Typography, Row, Col } from "antd";
import { UserInfoDropdown } from "./UserInfoDropdown";
import { CallsStatisticComponent } from "./CallsStatisticComponent";
import { DepartmentInfoDropdown } from "./DepartmentInfoDropdown";

const { Header } = Layout;
const { Text } = Typography;

export const CallsHeaderComponent: React.FC = () => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Row style={{ margin: "0 7%" }}>
        <Col span={4}>
          <Text type="secondary">Среда, 13 октября</Text>
        </Col>
        <Col span={12}>
          <CallsStatisticComponent />
        </Col>
        <Col span={8}>
          <Row>
            <div style={{ marginLeft: "auto" }}>
              <DepartmentInfoDropdown />
              <UserInfoDropdown />
            </div>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};
