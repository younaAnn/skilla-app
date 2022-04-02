import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Menu, Button, Avatar, Dropdown, Card, Divider } from "antd";
import { UserOutlined, PhoneOutlined, DownOutlined } from "@ant-design/icons";

export const UserInfoDropdown: React.FC = () => {
  // TODO Add styles to dropdown
  const userMenu = (
    <Card style={{ width: "400px" }}>
      <p>Упоров Кирилл</p>
      <p>Директор Санкт-Петербург</p>
      <p>
        <PhoneOutlined />8 (800) 333-17-21
      </p>
      <p>hi@skilla.ru</p>
      <Divider />
      <Menu>
        <span>Операторы</span>
        <Menu.Item>
          {" "}
          <Avatar icon={<UserOutlined />} />
          Мирон Батонов
        </Menu.Item>
        <Menu.Item>
          <Avatar icon={<UserOutlined />} />
          Алексей Ильин
        </Menu.Item>
        <Menu.Item>
          <Avatar icon={<UserOutlined />} />
          Милана Константинопольская
        </Menu.Item>
        Логисты
        <Menu.Item>
          <Avatar icon={<UserOutlined />} />
          Мирон Батонов
        </Menu.Item>
        <Menu.Item>
          <Avatar icon={<UserOutlined />} />
          Алексей Ильин
        </Menu.Item>
        <Menu.Item>
          <Avatar icon={<UserOutlined />} />
          Милана Константинопольская
        </Menu.Item>
        Бухгалтеры
        <Menu.Item>
          <Avatar icon={<UserOutlined />} />
          Мирон Батонов
        </Menu.Item>
        <Menu.Item>
          <Avatar icon={<UserOutlined />} />
          Алексей Ильин
        </Menu.Item>
        <Menu.Item>
          <Avatar icon={<UserOutlined />} />
          Милана Константинопольская
        </Menu.Item>
      </Menu>
    </Card>
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
