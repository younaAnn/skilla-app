import React, { useCallback, useState } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Layout, Menu, Button } from "antd";
import {
  FileTextOutlined,
  MailOutlined,
  TeamOutlined,
  UserOutlined,
  PhoneOutlined,
  SettingOutlined,
  StockOutlined,
  PlusCircleFilled,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { BsCheck2All, BsBriefcase, BsBook } from "react-icons/bs";
import { Breakpoint } from "antd/lib/_util/responsiveObserve";

const { Sider } = Layout;

export const DefaultNavigationComponent: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sm: Breakpoint = "sm";

  const onCollapse = useCallback((collapsed) => {
    setIsCollapsed(collapsed);
  }, []);

  const menuItemStyle = {
    paddingLeft: "15px",
  };

  const buttonStyle = {
    minWidth: "100%",
    alignContent: "center",
  };

  return (
    <Sider
      collapsible
      collapsed={isCollapsed}
      onCollapse={onCollapse}
      breakpoint={sm}
    >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["4"]} mode="inline">
        <Menu.Item key="1" icon={<StockOutlined />} style={menuItemStyle}>
          Итоги
        </Menu.Item>
        <Menu.Item key="2" icon={<BsCheck2All />} style={menuItemStyle}>
          Заказы
        </Menu.Item>
        <Menu.Item key="3" icon={<MailOutlined />} style={menuItemStyle}>
          Сообщения
        </Menu.Item>
        <Menu.Item key="4" icon={<PhoneOutlined />} style={menuItemStyle}>
          Звонки
        </Menu.Item>
        <Menu.Item key="5" icon={<TeamOutlined />} style={menuItemStyle}>
          Контрагенты
        </Menu.Item>
        <Menu.Item key="6" icon={<FileTextOutlined />} style={menuItemStyle}>
          Документы
        </Menu.Item>
        <Menu.Item key="7" icon={<UserOutlined />} style={menuItemStyle}>
          Исполнители
        </Menu.Item>
        <Menu.Item key="8" icon={<BsBriefcase />} style={menuItemStyle}>
          Отчеты
        </Menu.Item>
        <Menu.Item key="9" icon={<BsBook />} style={{ paddingLeft: "15px" }}>
          База знаний
        </Menu.Item>
        <Menu.Item key="10" icon={<SettingOutlined />} style={menuItemStyle}>
          Настройки
        </Menu.Item>

        <Menu.Item key="11" style={menuItemStyle}>
          <Button type="primary" size={"large"} style={buttonStyle}>
            Добавить заказ <PlusCircleFilled />
          </Button>
        </Menu.Item>
        <Menu.Item key="12" style={menuItemStyle}>
          <Button type="primary" size={"large"} style={buttonStyle}>
            Оплата
            <ExclamationCircleFilled />
          </Button>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
