import React, { useState, useEffect} from "react";
import {Avatar, ConfigProvider, Dropdown, Layout, Menu} from "antd";
import {BrowserRouter, NavLink as Link, Route, Switch, useLocation} from "react-router-dom";
import {SettingOutlined,AppstoreOutlined} from '@ant-design/icons';
import Shipments from './Shipments';
import PointHome from './point-home';
import Confirmation from "./Confirmation";

const { Header, Footer, Content } = Layout;

const UserPointIndex = (props) => {
    let location = useLocation();
    let [selected, setSelected] = useState([location.pathname]);
    const handleClick = e => {
        console.log('click ', e);
    };

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact={true} path="/" component={() => <PointHome/>} />
                    <Route path="/Shipments" exact={true} component={() => <Shipments/>} />
                    <Route path="/Shipments/:shipment_id" exact={true} component={() => <Confirmation/>} />
                </Switch>
            </Layout>

            <Layout>
            <Footer className="webview-footer">
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['/']} 
                    className="flex-container space-between" 
                    // onClick={handleClick}
                    onSelect={(selectParam) => {
                        setSelected(selectParam.keyPath);
                      }}
                >
                    <Menu.Item key="/">
                        <Link to="/">
                            <AppstoreOutlined />
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="balance">
                        <Link to="balance">
                            <AppstoreOutlined />
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="statistic">
                        <Link to="statistic">
                            <AppstoreOutlined />
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="profile">
                        <Link to="profile">
                            <AppstoreOutlined />
                        </Link>
                    </Menu.Item>
                </Menu>
            </Footer>
            </Layout>
        </BrowserRouter>
    );
};

export default UserPointIndex;