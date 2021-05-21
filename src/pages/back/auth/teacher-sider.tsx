import { Layout, Menu } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

export const TeacherSider = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="md"
      collapsedWidth="0"
      width={200}
      onBreakpoint={(broken) => {
        setCollapsed(broken);
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="竞赛管理">
          <Menu.Item key="1">
            <Link to={"/back/contest/listAll"}>查看竞赛</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={"/back/contest/create"}>竞赛创建</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={"/back/contest/listCreated"}>创建的竞赛</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to={"/back/contest/teacher/listAllTeachContests"}>
              指导的竞赛
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};