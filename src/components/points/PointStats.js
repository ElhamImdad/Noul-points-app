import React, {useState, useContext, useEffect} from 'react';
import trackingBlue from '../../assets/tracking-blue.svg';
import trackingYello from '../../assets/tracking-yello.svg';
import trackingGreen from '../../assets/order-success-icon.svg';
import styled from "styled-components";
import {useHistory, useParams} from "react-router-dom";
import { Card, Col, Row, Button, Select, Tag, ConfigProvider, PageHeader } from 'antd';
import { ArrowLeftOutlined, MoreOutlined ,EnvironmentOutlined, PhoneOutlined} from '@ant-design/icons';
import PointReport from './PointReport';
import axios from "../../axios";

const { Option } = Select;

const PointStats = () => {
    let history = useHistory();
    const [data, setData] = useState({});
    const [pointInfo, setPointInfo] = useState({});
    const [region, setRegion] = useState({});
    const [city, setCity] = useState({});
    const [district, setDistrict] = useState({});
    let { point_id } = useParams();
    let isLoading = false;

    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
        }
    };

    const getPointsStatics = (value) => {
        const config2 = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
            },
            params: {
                display: value
            }
        };
        axios
          .get(`/V1/point/users/${point_id}/analysis`, config2)
          .then((response) => {
            setData(response.data);
            console.log("statistic 1 point from Api",response.data)
          })
          .catch((error) => {
            console.log("AXIOS ERROR in getPointStatics: ", error);
          })
          .finally(() => {
            isLoading = false;
          });
    };
    const getPointsByID = () => {
        axios
          .get(`/V1/point/users/${point_id}`, config)
          .then((response) => {
            setPointInfo(response.data.data);
            setDistrict(response.data.data.district);
            setRegion(response.data.data.region);
            setCity(response.data.data.city);
            console.log(" 1 point from Api ==> ",response.data.data)
          })
          .catch((error) => {
            console.log("AXIOS ERROR in getPointStatics: ", error);
          })
          .finally(() => {
            isLoading = false;
          });
    };
    useEffect(() => {
        getPointsStatics();
        // getPointsByID();
        console.log("id of point ==> ",point_id);
    }, []);
    const handleChange = ({ value }) => {
        if (value === 'Today') {
            console.log(`Click on item ${value}`);
            getPointsStatics('today');
        }
        if (value === 'Month') {
            console.log(`Click on item ${value}`);
            getPointsStatics('month');
        }
        if (value === 'Year') {
            console.log(`Click on item ${value}`);
            getPointsStatics('year');
        }
    }

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
                            <StyeldPageHeader
                                style={{borderRadius: '7px'}}
                                className="site-page-header-responsive bg_light"
                                onBack={() => history.goBack()}
                                title={pointInfo.name}
                                subTitle={
                                    <span>
                                        <ul className="flex-container space-between">
                                            {/* <strong>Place Name</strong> */}
                                    
                                            <li className="icons-style mg-lr-5px">
                                                <EnvironmentOutlined className="icons-style"/>{district.name_en} - {region.name_en}, {city.name_en}.
                                            </li>
                                            <li className="mg-lr-5px">
                                                <PhoneOutlined className="icons-style"/>{pointInfo.phone}
                                            </li>
                                        
                                            {/* <h3 className="icons-style"><EnvironmentOutlined className="icons-style"/>Riyadh - Prince Turki Ibn Abdulaziz Al Awwal St, Saudi Arabia.</h3> */}
                                            {/* <h3 className="icons-style"><PhoneOutlined className="icons-style"/>+509405710</h3> */}
                                        </ul>
                                    </span>   
                                }
                                extra={[
                                    pointInfo.isActive === 0? 
                                    <Tag color="volcano" key={true}>Inactive</Tag>:
                                    <Tag color="success" key={true}>Active</Tag>,
                                    <Button type="text" icon={<MoreOutlined/>}/>,
                                ]}
                            />
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
                                <h3>{data.Total_Orders}</h3>
                                <h3>Your total Orders Number is {data.Total_Orders}</h3>
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
                                    <h3>{data.onHold_Ordrs}</h3>
                                    <h3>You have {data.onHold_Ordrs} order On hold by points</h3> 
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
                                <h3>{data.Released_Orders}</h3>
                                <h3>You have released {data.Released_Orders} order from your points</h3>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
            <PointReport id={point_id}/>
        </div>
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

export default PointStats;