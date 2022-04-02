import React from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import { CallsPage } from "../../pages/CallsPage";
import { DefaultNavigationComponent } from "./DefaultNavigationComponent copy";

const { Footer } = Layout;

export const DefaultLayoutComponent: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <DefaultNavigationComponent />
      <Layout className="site-layout">
        <Routes>
          <Route path="/" element={<CallsPage />} />
        </Routes>
        <Footer style={{ textAlign: "center" }}>
          Anna Loginova, esclide@yandex.ru
        </Footer>
      </Layout>
    </Layout>
  );
};
