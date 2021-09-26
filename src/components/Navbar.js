import React, { useContext } from "react";
import { Button, Layout, Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContex";
import Cookies from "js-cookie";

const { Header } = Layout;

const Navbar = () => {
  const { loginStatus, setLoginStatus } = useContext(UserContext);
  let history = useHistory();

  const handleLogout = () => {
    setLoginStatus(false);
    Cookies.remove("user");
    Cookies.remove("email");
    Cookies.remove("token");
    history.push("/login");
  };

  return (
    <>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          {Cookies.get("token") !== undefined && (
            <>
              <Menu.Item key="6" style={{ position: "absolute", right: "0" }}>
                <Button type="primary" onClick={handleLogout}>
                  Logout
                </Button>
              </Menu.Item>
            </>
          )}

          {Cookies.get("token") === undefined && (
            <>
              <Menu.Item key="1">
                <Link to="/"> Movie </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/game"> Game </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/register">Register</Link>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Header>
    </>
  );
};

export default Navbar;
