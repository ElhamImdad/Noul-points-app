import React from 'react';
import Report from './Report';
import '../styles/colors.scss';
import '../styles/overview.scss';
import { Card, Col, Row, Statistic } from 'antd';
import { PauseCircleOutlined, CheckCircleOutlined, ScheduleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const Overview = () => {
    return (
        <div className= "Overview-container container">         
            <div>
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <Card 
                            style={{borderRadius: '7px'}}  bordered={false}>
                            <h3>    
                                <ScheduleOutlined className="icon-cd-size blue_light"/> 
                                <strong className="blue_light">Total Order</strong>
                            </h3>
                            <div className="cd-content">
                            {/* <Statistic className="mg-10px" style={{fontSize: '5px'}} value={112893} /> */}
                                <h3>50</h3>
                                <h3>Your total Orders Number is 50</h3>
                            </div>
                        </Card>
                    </Col>

                    <Col span={6}>
                        <Card 
                                style={{borderRadius: '7px'}}  bordered={false}>
                                <h3>   
                                    <PauseCircleOutlined className="icon-cd-size warninng"/> 
                                    <strong className="warning">On hold</strong>
                                </h3>
                                <div className="cd-content">
                                    <h3>50</h3>
                                    <h3>You have 50 order On hold by points</h3> 
                                </div>
                        </Card>
                    </Col>

                    <Col span={6}>
                        <Card 
                            style={{borderRadius: '7px'}}  bordered={false}>
                            <h3>
                                <CheckCircleOutlined className="icon-cd-size success"/> 
                                <strong className="success">Released</strong>
                            </h3>
                            <div className="cd-content">
                                <h3>50</h3>
                                <h3>You have released 50 order from your points</h3>
                            </div>
                        </Card>
                    </Col>
                    
                    <Col span={6}>
                        <Card 
                            style={{borderRadius: '7px'}}  bordered={false}>
                            <h3>
                                <ClockCircleOutlined className="icon-cd-size orange"/> 
                                <strong className="">Active points</strong>
                            </h3>
                            <div className="cd-content">
                                <h3>50</h3>
                                <h3>You have 50 active points</h3>
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