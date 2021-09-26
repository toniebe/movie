import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Cookies from "js-cookie";

const { Content } = Layout;

const LayoutComponent = (props) => {
  return (
    <>
      <Layout>
        <Navbar />
        <Layout>
          {Cookies.get("token") !== undefined && <Sidebar />}

          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 800,
                background: "#fff",
              }}
            >
              {props.content}
            </Content>
          </Layout>
        </Layout>
        <Footer />
      </Layout>
    </>
  );
};

export default LayoutComponent;
