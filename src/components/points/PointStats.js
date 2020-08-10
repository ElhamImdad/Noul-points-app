import React from 'react';
import trackingBlue from '../../assets/tracking-blue.svg';
import trackingYello from '../../assets/tracking-yello.svg';
import trackingGreen from '../../assets/order-success-icon.svg';
import { Card, Col, Row, Button, Select, Tag } from 'antd';
import { ArrowLeftOutlined, MoreOutlined } from '@ant-design/icons';
import PointReport from './PointReport';

const { Option } = Select;

const PointStats = () => {
    return (
        <div className= "Overview-container container">
            <div style={{ marginBottom: 16 }}>
                <Row justify="end">
                    <Select
                        labelInValue
                        defaultValue={{ value: 'Today' }}
                        style={{ width: 120 }}
                        onChange={handleChange}
                    >
                        <Option value="Today">Today</Option>
                        <Option value="Month">Month</Option>
                        <Option value="Year">Year</Option>
                    </Select>
                </Row>
            </div>
            <Row gutter={[16, 16]}>
                <Col xs={24}>
                    <Card 
                        style={{borderRadius: '7px'}}  bordered={false}>
                        <ul className="flex-container space-between" >
                            <li>
                                <span>
                                    <ul className="flex-container space-between">
                                        <Button type="text" icon={<ArrowLeftOutlined/>} />
                                        <strong>Place Name</strong>
                                        
                                        <li className="mg-lr-5px">
                                            location
                                        </li>
                                        <li className="mg-lr-5px">
                                            phon
                                        </li>
                                        <li>
                                            link
                                        </li>
                                    </ul>
                                </span>
                            </li> 

                            <li>
                                {/* <Tag color="error">INACTIVE</Tag> */}
                                <Tag color="success">ACTIVE</Tag>
                                <Button type="text" icon={<MoreOutlined/>}/>
                            </li>
                        </ul>
                    </Card>
                </Col>
            </Row>      
            <div>
                <Row gutter={[16, 16]}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}
                        lg={{ span: 8 }} xl={{ span: 8 }}>
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

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}
                        lg={{ span: 8 }} xl={{ span: 8 }}>
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

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}
                        lg={{ span: 8 }} xl={{ span: 8 }}>
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
                </Row>
            </div>
            <PointReport/>
        </div>
    );
};

const handleChange = ({ value }) => {
    if (value === 'Today') {
        console.log(`Click on item ${value}`);
    }
    if (value === 'Month') {
        console.log(`Click on item ${value}`);
    }
    if (value === 'Year') {
        console.log(`Click on item ${value}`);
    }
};

export default PointStats;