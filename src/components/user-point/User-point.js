import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  BrowserRouter,
  NavLink as Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import {
  HomeOutlined,
  CreditCardOutlined,
  RiseOutlined,
  UserOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import Shipments from "./Shipments";
import PointHome from "./point-home";
import Confirmation from "./Confirmation";
import RecievePage from "./recieve/RecievePage";
import UserPointState from "../../context/user-point/userPointState";
import { useContext } from "react";
import UserPointContext from "../../context/user-point/userPointContext";
import { colors } from "../../styles/global";

const { Footer } = Layout;

const UserPointIndex = (props) => {
  let location = useLocation();
  let [selected, setSelected] = useState([location.pathname]);

  return (
    <UserPointState>
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh", paddingBottom: "52px" }}>
          <Switch>
            <Route exact path="/" component={PointHome} />
            <Route path="/recieve" exact component={RecievePage} />
            <Route path="/Shipments" exact component={Shipments} />
            <Route
              path="/Shipments/:shipment_id"
              exact
              component={Confirmation}
            />
          </Switch>
        </Layout>

        <Layout style={{ position: "fixed", bottom: "0", width: "100vw" }}>
          <Footer className="webview-footer">
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["/"]}
              className="flex-container space-between"
              onSelect={(selectParam) => {
                setSelected(selectParam.keyPath);
              }}
            >
              <Menu.Item key="/">
                <Link to="/">
                  <HomeOutlined style={footerIconStyles} />
                </Link>
              </Menu.Item>
              <Menu.Item key="balance">
                <Link to="balance">
                  <CreditCardOutlined style={footerIconStyles} />
                </Link>
              </Menu.Item>
              <Menu.Item key="statistic">
                <Link to="statistic">
                  <RiseOutlined style={footerIconStyles} />
                </Link>
              </Menu.Item>
              <Menu.Item key="profile">
                <Link to="profile">
                  <UserOutlined style={footerIconStyles} />
                </Link>
              </Menu.Item>
            </Menu>
          </Footer>
        </Layout>
      </BrowserRouter>
    </UserPointState>
  );
};

const footerIconStyles = {
  margin: "auto",
};

export default UserPointIndex;
