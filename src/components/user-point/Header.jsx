import React, { useState, useEffect } from "react";
import { PageHeader, Layout } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { useLocation, useHistory, withRouter } from "react-router-dom";

const Header = (props) => {

  const history = useHistory();

  const titleMap = {
    "#/": "Home",
    "#/orders": "All Orders",
    "#/release": "Release Orders",
    "#/recieve": "Recieve Orders"
  }
  
  return (
    <Layout
      style={{ position: "fixed", top: "0", width: "100vw", zIndex: "1000" }}
    >
      <PageHeader
        style={{ margin: "0" }}
        className="webview-header ant-page-header-heading-title"
        onBack={() => history.goBack()}
        title={titleMap[history.location.hash] || "Confirmation"}
        extra={<BellOutlined style={{ color: "#fff" }} />}
      />
    </Layout>
  );
};

export default Header;
