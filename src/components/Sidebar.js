import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <>
      <Sider width={200} className="site-layout-background">
        <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%", borderRight: 0 }}>
          <SubMenu key="sub1" icon={<NotificationOutlined />} title="Game">
            <Menu.Item key="1">
              <Link to="/gameList">Game List</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/gameForm">Add Game </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Movie">
            <Menu.Item key="3">
              <Link to="/movieList">Movie List</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/movieForm">Add Movie</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<UserOutlined />} title="Account">
            <Menu.Item key="9">
              <Link to="/changePassword">Update Password</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
