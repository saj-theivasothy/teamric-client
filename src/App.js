import React, { useState } from "react";

import sampleJSON from "./data/sample.json";

import Sidebar from "./Components/Sidebar"

import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [collapsedState, setCollapsedState] = useState(false);

  const toggle = () => {
    setCollapsedState(!collapsedState);
  };

  console.log(sampleJSON);

  return (
    <div className="App">
      <Layout>
      <Sidebar collapsedState={collapsedState}/>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsedState ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            We need to create dynamic components here. For example...
            <br />
            profile content/viz gets rendered if user clicks on profile
            assessment
            <br />
            content/viz gets rendered if user clicks on assessment
          </Content>
          <Footer style={{ textAlign: "center" }}>Teamric</Footer>
        </Layout>
        </Layout>
    </div>
  );
};

export default App;
