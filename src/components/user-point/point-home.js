import React from 'react';
import styled from "styled-components";
import { Layout,PageHeader, Row, Col, Card,Tabs,Menu } from 'antd';
import {Link, useHistory, useLocation} from "react-router-dom";
import {SettingOutlined} from '@ant-design/icons';
import trackingBlue from '../../assets/tracking-blue.svg';
import Shipments from './Shipments';

const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;

const PointHome = () => {
    let history = useHistory();
    let location = useLocation();
    // const handleClick = e => {
    //     console.log('click ', e);
    // };
    return (
        <>
            <Layout>
                <PageHeader
                    className="webview-header ant-page-header-heading-title"
                    onBack={() => null}
                    title="Home"
                    extra={<SettingOutlined />}
                />
                <Content className="webview-container">
                    <Row gutter={[16, 16]} >
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Card 
                                style={{borderRadius: '7px'}}  bordered={false}>
                                    <Row justify="space-around">
                                        <strong className="color_primary">4</strong>
                                        <span className="cd-content">Deliverd</span>
                                    </Row>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Card 
                                style={{borderRadius: '7px'}}  bordered={false}>
                                <Row justify="space-around">
                                    <strong className="color_primary">4</strong>
                                    <span className="cd-content">In Store</span>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Card 
                                style={{borderRadius: '7px'}}  bordered={false}>
                                <Row justify="space-around">
                                    <strong className="color_primary">4</strong>
                                    <span className="cd-content">Canceled</span>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Card 
                                style={{borderRadius: '7px'}}  bordered={false}>
                                <Row justify="space-around">
                                    <strong className="color_primary">4</strong>
                                    <span className="cd-content">On going</span>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Card 
                                    style={{borderRadius: '7px'}}  bordered={false}
                                    onClick={() => (
                                        // console.log("Released Shipments cliched")
                                        
                                        history.push('/Shipments')
                                    )}>
                                    <Row justify="space-around">
                                        <img src={trackingBlue}/>
                                        <h3><strong>Released Shipments</strong></h3>
                                        <h4>Scan the barcode</h4>
                                    </Row>
                                </Card>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Card 
                                    style={{borderRadius: '7px'}}  bordered={false}>
                                    <Row justify="space-around">
                                        <img src={trackingBlue}/>
                                        <h3><strong>Receive Shipments</strong></h3>
                                        <h4>Scan the barcode</h4>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                </Content>
                {/* <Footer className="webview-footer"> */}
                {/* <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} 
                className="flex-container space-between" onClick={handleClick}>
                    <Menu.Item key="1"><SettingOutlined /></Menu.Item>
                    <Menu.Item key="2"><SettingOutlined /></Menu.Item>
                    <Menu.Item key="3"><SettingOutlined /></Menu.Item>
                    <Menu.Item key="4"><SettingOutlined /></Menu.Item>
                </Menu> */}
                {/* </Footer> */}
            </Layout>
        </>
    );
};

export default PointHome;