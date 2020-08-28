import React from 'react';
import styled from "styled-components";
import { Layout,PageHeader, Row, Col, Card,Tabs,Menu } from 'antd';
import {Link, useHistory, useLocation} from "react-router-dom";
import {SettingOutlined} from '@ant-design/icons';
import trackingBlue from '../../assets/tracking-blue.svg';
import deliverdSVG from '../../assets/user-point/icons/deliverd.svg';
import inStoreSVG from '../../assets/user-point/icons/in-store.svg';
import cancelledSVG from '../../assets/user-point/icons/cancelled.svg';
import onGoingSVG from '../../assets/user-point/icons/on-going.svg';
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
                                        <strong className="color_primary" style={{...styles.verCenter, ...styles.dashboardNumber}}>4</strong>
                                        <img src={deliverdSVG} width={dashboardIconWidth} alt=""/>
                                        <span className="cd-content" style={{...styles.verCenter}}>Deliverd</span>
                                    </Row>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Card 
                                style={{borderRadius: '7px'}}  bordered={false}>
                                <Row justify="space-around">
                                    <strong className="color_primary" style={{...styles.verCenter, ...styles.dashboardNumber}}>4</strong>
                                    <img src={inStoreSVG} width={dashboardIconWidth} alt="" />
                                    <span className="cd-content" style={{...styles.verCenter}}>In Store</span>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Card 
                                style={{borderRadius: '7px'}}  bordered={false}>
                                <Row justify="space-around">
                                    <strong className="color_primary" style={{...styles.verCenter, ...styles.dashboardNumber}}>4</strong>
                                    <img src={cancelledSVG} width={dashboardIconWidth} alt="" />
                                    <span className="cd-content" style={{...styles.verCenter}}>Cancelled</span>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Card 
                                style={{borderRadius: '7px'}}  bordered={false}>
                                <Row justify="space-around">
                                    <strong className="color_primary" style={{...styles.verCenter, ...styles.dashboardNumber}}>4</strong>
                                    <img src={onGoingSVG} width={dashboardIconWidth} alt="" />
                                    <span className="cd-content" style={{...styles.verCenter}}>On going</span>
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
                                    style={{borderRadius: '7px'}}  bordered={false}
                                    onClick={() => history.push("/recieve")}>
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
const styles = {};
styles.verCenter = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center"
}

styles.dashboardNumber = {
    fontSize: "2rem",
    paddingTop: "10px"
}

const dashboardIconWidth = 30;

export default PointHome;