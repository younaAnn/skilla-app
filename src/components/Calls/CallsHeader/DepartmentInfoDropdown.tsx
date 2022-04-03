import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Menu, Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

export const DepartmentInfoDropdown: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Первый вариант</Menu.Item>
      <Menu.Item key="2">Еще вариант</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button type="text" style={{ minHeight: "100%" }}>
        ИП Сидорова Александра Ивановна
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};
