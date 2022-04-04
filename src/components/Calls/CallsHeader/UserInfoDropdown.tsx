import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Menu, Button, Avatar, Dropdown } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  DownOutlined,
  MailOutlined,
} from "@ant-design/icons";

export const UserInfoDropdown: React.FC = () => {
  // TODO Add styles to dropdown

  const userMenu = (
    <Menu style={{ minWidth: "400px", paddingLeft: "10px" }}>
      Упоров Кирилл
      <Menu.ItemGroup key="g1" title=" Директор Санкт-Петербург" />
      <Menu.ItemGroup
        key="g2"
        title={
          <>
            <PhoneOutlined /> 8 (800) 333-17-21
          </>
        }
      />
      <Menu.ItemGroup
        key="g3"
        title={
          <>
            <MailOutlined /> hi@skilla.ru
          </>
        }
      />
      <Menu.Divider />
      Операторы
      <Menu.Item key="1">
        <Avatar icon={<UserOutlined />} /> Мирон Батонов
      </Menu.Item>
      <Menu.Item key="2">
        <Avatar icon={<UserOutlined />} /> Алексей Ильин
      </Menu.Item>
      <Menu.Item key="3">
        <Avatar icon={<UserOutlined />} /> Милана Константинопольская
      </Menu.Item>
      Логисты
      <Menu.Item key="4">
        <Avatar icon={<UserOutlined />} /> Мирон Батонов
      </Menu.Item>
      <Menu.Item key="5">
        <Avatar icon={<UserOutlined />} /> Алексей Ильин
      </Menu.Item>
      <Menu.Item key="6">
        <Avatar icon={<UserOutlined />} /> Милана Константинопольская
      </Menu.Item>
      Бухгалтеры
      <Menu.Item key="7">
        <Avatar icon={<UserOutlined />} /> Мирон Батонов
      </Menu.Item>
      <Menu.Item key="8">
        <Avatar icon={<UserOutlined />} /> Алексей Ильин
      </Menu.Item>
      <Menu.Item key="9">
        <Avatar icon={<UserOutlined />} /> Милана Константинопольская
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={userMenu}>
      <Button type="text">
        <Avatar size="large" icon={<UserOutlined />} />

        <DownOutlined />
      </Button>
    </Dropdown>
  );
};
