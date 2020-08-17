import React, {useState} from 'react';
import Overview from '../overview/Overview';
import {Layout,Dropdown,Avatar , Menu} from "antd";
import PointLayout from '../points/PointStats';
import Points from '../points/Points';
import {BrowserRouter, NavLink as Link2, Route, Switch, useLocation,} from "react-router-dom";
import {
    AppstoreOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from "@ant-design/icons";
import styled from "styled-components";


const { Header, Sider, Link} = Layout;
const {Item,Divider} = Menu ;

const UserMenu = () => {
    const location = useLocation();
    let [collapsed,setCollapsed] = useState(false);
    let [selected, setSelected] = useState([location.pathname]);

    const handelCollapse = () => {
        setCollapsed(!collapsed);
    };

    const StyeledMenuItem = styled(Menu.Item)`
    border-radius: ${collapsed ? "0" : "28px"};
  `;

    return (
        <BrowserRouter>
        <Layout>
            <Sider
                className="sider-layout"
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={270}
                style={{ minHeight: "100vh" }}
            >

            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["/"]}
            >
                <StyeledMenuItem key="/">
                    <Link2 to="/">
                    <AppstoreOutlined />
                    <span>{("Overview.1")}</span>
                    </Link2>
                </StyeledMenuItem>

                <StyeledMenuItem key="/points">
                    <Link2 to="/points">
                    <AppstoreOutlined />
                    <span>{("Point.1")}</span>
                    </Link2>
                </StyeledMenuItem>
                {/* <Menu.Item key="/">
                    <span>Overview</span>
                </Menu.Item>
                <Menu.Item key="/points">
                    <span>Points</span>
                </Menu.Item> */}
            </Menu>
            </Sider>

            <Layout className="site-layout">
                <div className="header-wrapper">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(
                            collapsed ? "open" : "close",
                            {
                                className: "trigger",
                                onClick: ()=>setCollapsed(!collapsed),
                            }
                        )}

                    <div>
                        <span
                            className="i18n-select"
                        >
                            <span className="user-dropdown">
                            العربية
                            </span>
                        </span>
                        <Dropdown
                            className="user-dropdown"
                            overlay={userMenu}
                            trigger={["click"]}
                        >
                        <span>
                            <Avatar
                                className="user-dropdown-avatar"
                                size="small"
                                src={undefined}
                                alt="avatar"
                            />
                            <span className="user-dropdown-text">Hashim</span>
                        </span>
                        </Dropdown>
                    </div>
                    </Header>
                </div>
                {/* <Overview/> */}
                {/* <PointLayout/> */}
                <Switch>
                    <Route path="/points" exact={true} component={() => <Points />} />

                    <Route path="/points/:point_id" exact={true} component={() => <PointLayout />} />


                    <Route
                    exact={true}
                    path="/"
                    component={() => <Overview/>}
                    />
                </Switch>
            </Layout>
        </Layout>
        </BrowserRouter>
    );
};

const userMenu = (
    <Menu selectedKeys={[]}>
        <Item key="userCenter">
            <Link to="/profile">
                Profile
            </Link>
        </Item>
        <Divider />
        <Item key="logout" onClick={()=>console.log("logout")}>
            Logout
        </Item>
    </Menu>
);

export default UserMenu;