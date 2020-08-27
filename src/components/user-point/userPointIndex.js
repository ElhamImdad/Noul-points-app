import React from 'react';
import styled from "styled-components";
import { Layout,PageHeader, Row, Col, Card,Tabs,Menu } from 'antd';
import {SettingOutlined} from '@ant-design/icons';
import trackingBlue from '../../assets/tracking-blue.svg';

const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;

const userPointIndex = () => {
    const handleClick = e => {
        console.log('click ', e);
    };
    return (
        <>
            <Layout>
                <StyeldPageHeader
                    className="webview-header ant-page-header-heading-title"
                    onBack={() => null}
                    title="Home"
                    extra={<SettingOutlined />}
                >
                </StyeldPageHeader>
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
                                    style={{borderRadius: '7px'}}  bordered={false}>
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
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} 
                className="space-between" onClick={handleClick}>
                    <Menu.Item key="1"><SettingOutlined /></Menu.Item>
                    <Menu.Item key="2"><SettingOutlined /></Menu.Item>
                    <Menu.Item key="3"><SettingOutlined /></Menu.Item>
                    <Menu.Item key="4"><SettingOutlined /></Menu.Item>
                </Menu>
                    {/* <Row className="webview-footer" justify="space-between">
                        <img src={trackingBlue}/>
                        <img src={trackingBlue}/>
                        <img src={trackingBlue}/>
                        <img src={trackingBlue}/>
                    </Row> */}
                {/* </Footer> */}
            </Layout>
        </>
    );
};
const StyeldPageHeader = styled(PageHeader)`
  span.ant-descriptions-item-label.ant-descriptions-item-colon {
    display: block;
    background: white;
    padding: 1em;
    font-size: 16px;
    margin-bottom: 0.8em;
  }
  span.ant-descriptions-item-content {
    font-weight: 600;
    font-size: 15px;
  }
`;

export default userPointIndex;