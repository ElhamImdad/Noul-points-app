import React, {useState} from 'react';
import './index.css';
import './styles/my-theme.css';
import './fonts/Tajawal-Regular.ttf';
import './index';
import './App.css';
import './styles/layout.scss';
import Overview from './components/overview/Overview';
import {Layout,Dropdown,Avatar , Menu} from "antd"
import Login from "./components/login/Login";
const { Header, Sider, Link} = Layout;
const {Item,Divider} = Menu ;

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
function App() {

    let [collapsed,setCollapsed] = useState(false)
  return (
    <div className="App">

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
        </Layout>

        </Layout>

    </div>
  );
}

export default App;
