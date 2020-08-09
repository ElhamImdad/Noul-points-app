import React, {useState} from 'react';
import Overview from '../overview/Overview';
import {Layout,Dropdown,Avatar , Menu} from "antd";
import AddPoint from '../points/AddPoint';


const { Header, Sider, Link} = Layout;
const {Item,Divider} = Menu ;

const UserMenu = () => {
    let [collapsed,setCollapsed] = useState(false);
    return (
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
            >
                <Menu.Item key="/">
                    <span>Overview</span>
                </Menu.Item>
                <Menu.Item key="/points">
                    <span>Points</span>
                </Menu.Item>
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
                <Overview/>
                <AddPoint/>
            </Layout>
        </Layout>
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