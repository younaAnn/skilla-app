import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Row, Col, DatePicker, Button, Grid } from "antd";
import { UserInfoDropdown } from "./UserInfoDropdown";
import { CallsStatisticComponent } from "./CallsStatisticComponent";
import { DepartmentInfoDropdown } from "./DepartmentInfoDropdown";
import moment, { Moment } from "moment";
import { SearchOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { useBreakpoint } = Grid;

interface Props {
  selectedDate?: Moment;
  onChange?: (value: Moment | null) => void;
}

export const CallsHeaderComponent: React.FC<Props> = (props) => {
  //TODO move icon color to styles
  const { selectedDate, onChange } = props;

  const screens = useBreakpoint();

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Row style={{ margin: "0 7%" }}>
        <Col span={3}>
          <DatePicker
            bordered={false}
            defaultValue={moment("2015-01-01", "dddd, D MMM")}
            value={selectedDate}
            format={"dddd, D MMM"}
            allowClear={false}
            suffixIcon={undefined}
            style={{ minWidth: "100%" }}
            className={"ant-typography ant-typography-secondary"}
            onChange={onChange}
          />
        </Col>
        <Col span={12}>
          <CallsStatisticComponent />
        </Col>
        <Col span={9}>
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              style={{ minHeight: "100%", marginLeft: "auto" }}
            >
              <SearchOutlined style={{ color: "rgba(0, 0, 0, 0.45)" }} />
            </Button>
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
