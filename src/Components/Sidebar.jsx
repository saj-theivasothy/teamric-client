import React from "react";

import Brand from "./Brand";

import logo from "../logo.svg";

import Search from "./Search"

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  EyeOutlined,
  QuestionOutlined,
  CalendarOutlined,
  SolutionOutlined,
  TeamOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = (props) => {
  return (
      <Sider trigger={null} collapsible collapsed={props.collapsedState}>
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

          <SubMenu key="sub4" icon={<TeamOutlined />} title="Team Members">
            <Search />
          </SubMenu>
          
        </Menu>
      </Sider>
  );
};

export default Sidebar; 