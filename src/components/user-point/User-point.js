import React, { useState, useEffect} from "react";
import {Avatar, ConfigProvider, Dropdown, Layout, Menu} from "antd";
import {BrowserRouter, NavLink as Link, Route, Switch, useLocation} from "react-router-dom";
import {HomeOutlined,CreditCardOutlined,RiseOutlined,UserOutlined} from '@ant-design/icons';
import Shipments from './Shipments';
import PointHome from './point-home';
import Confirmation from "./Confirmation";
import RecievePage from "./recieve/RecievePage";

const { Header, Footer, Content } = Layout;

const UserPointIndex = (props) => {
    let location = useLocation();
    let [selected, setSelected] = useState([location.pathname]);
    const handleClick = e => {
        console.log('click ', e);
    };

    return (
        <BrowserRouter>
            <Layout style={{minHeight: "100vh", paddingBottom: "52px"}}>
                <Switch>
                    <Route exact={true} path="/" component={() => <PointHome/>} />
                    <Route path="/recieve" exact={true} component={() => <RecievePage/>} />
                    <Route path="/Shipments" exact={true} component={() => <Shipments/>} />
                    <Route path="/Shipments/:shipment_id" exact={true} component={() => <Confirmation/>} />
                </Switch>
            </Layout>

            <Layout style={{position: "fixed", bottom: "0", width: "100vw"}}>
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
                            <HomeOutlined style={footerIconStyles}/>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="balance">
                        <Link to="balance">
                            <CreditCardOutlined style={footerIconStyles}/>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="statistic">
                        <Link to="statistic">
                            <RiseOutlined style={footerIconStyles}/>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="profile">
                        <Link to="profile">
                            <UserOutlined style={footerIconStyles}/>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Footer>
            </Layout>
        </BrowserRouter>
    );
};

const footerIconStyles = {
    margin: "auto"
}

export default UserPointIndex;