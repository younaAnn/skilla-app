import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Menu, Button, Dropdown, Grid } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { useBreakpoint } = Grid;

export const DepartmentInfoDropdown: React.FC = () => {
  const screens = useBreakpoint();
  console.log(screens);

  const menu = (
    <Menu>
      <Menu.Item key="1">Первый вариант</Menu.Item>
      <Menu.Item key="2">Еще вариант</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button type="text" style={{ minHeight: "100%" }}>
        {screens.xxl ? "ИП Сидорова Александра Ивановна" : "Подразделение"}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};
