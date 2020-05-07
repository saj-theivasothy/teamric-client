import React, { useState } from "react";

import Brand from "./Components/Brand";

import logo from "./logo.svg";

import sampleJSON from "./data/sample.json";

import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
  EyeOutlined,
  QuestionOutlined,
  CalendarOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsedState, setCollapsedState] = useState(false);

  const toggle = () => {
    setCollapsedState(!collapsedState);
  };

  console.log(sampleJSON);

  return (
    <div className="App">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsedState}>
          <Brand url={logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Me">
              <Menu.Item key="3" icon={<EyeOutlined />}>
                Profile
              </Menu.Item>
              <Menu.Item key="4" icon={<QuestionOutlined />}>
                Help
              </Menu.Item>
              <Menu.Item key="5" icon={<LogoutOutlined />}>
                Signout
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="sub2" icon={<CalendarOutlined />}>
              Calendar
            </Menu.Item>

            <Menu.Item key="sub3" icon={<SolutionOutlined />}>
              Start Assessment
            </Menu.Item>
          </Menu>
        </Sider>
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
