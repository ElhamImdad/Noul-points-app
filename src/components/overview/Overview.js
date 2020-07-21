import React from 'react';
import Report from './Report';
import '../styles/colors.scss';
import '../styles/overview.scss';
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
import { PauseCircleOutlined, CheckCircleOutlined, ScheduleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const Overview = () => {
    return (
        <div className= "Overview-container">         
            <div className="site-card-wrapper">
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <Card style={{borderRadius: '7px'}}  bordered={false}>
                            <ScheduleOutlined className="icon-cd-size blue_light"/> 
                            <strong className="font-16px blue_light">Total Order</strong>
                            <div className="cd-content">
                                <h2>50</h2>
                                Your total Orders Number is 50
                            </div>
                        </Card>
                    </Col>

                    <Col span={6}>
                        <Card style={{borderRadius: '7px'}}  bordered={false}>
                                <PauseCircleOutlined className="icon-cd-size warninng"/> 
                                <strong className="font-16px warninng">On hold</strong>
                                <div className="cd-content">
                                    <h2>50</h2>
                                    You have 50 order On hold by points
                                </div>
                        </Card>
                    </Col>

                    <Col span={6}>
                        <Card style={{borderRadius: '7px'}}  bordered={false}>
                            <CheckCircleOutlined className="icon-cd-size success"/> 
                            <strong className="font-16px success">Released</strong>
                            <div className="cd-content">
                                <h2>50</h2>
                                You have released 50 order from your points
                            </div>
                        </Card>
                    </Col>
                    
                    <Col span={6}>
                        <Card style={{borderRadius: '7px'}}  bordered={false}>
                            <ClockCircleOutlined className="icon-cd-size orange"/> 
                            <strong className="font-16px">Active points</strong>
                            
                            <div className="cd-content">
                                <h2>50</h2>
                                You have 50 active points
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
            <Report/>
        </div>
    );
};

export default Overview;