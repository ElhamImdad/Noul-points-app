import React from 'react';
import Report from './Report';
import '../../styles/colors.scss';
import '../../styles/overview.scss';
import '../../fonts/Tajawal-Regular.ttf';
import trackingBlue from '../../assets/tracking-blue.svg';
import trackingYello from '../../assets/tracking-yello.svg';
import trackingActive from '../../assets/track-by-id.svg';
import trackingGreen from '../../assets/order-success-icon.svg';
import { Card, Col, Row, Statistic } from 'antd';

const Overview = () => {
    return (
        <div className= "Overview-container container">         
            <div>
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <Card 
                            style={{borderRadius: '7px'}}  bordered={false}>
                            <h3> 
                                <img src={trackingBlue}/>
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
                                    <img src={trackingYello}/>
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
                                <img src={trackingGreen}/>
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
                                <img src={trackingActive}/>
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