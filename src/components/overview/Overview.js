import React, {useState, useContext, useEffect} from 'react';
import Report from './Report';
import '../../styles/colors.scss';
import '../../styles/overview.scss';
import '../../fonts/Tajawal-Regular.ttf';
import trackingBlue from '../../assets/tracking-blue.svg';
import trackingYello from '../../assets/tracking-yello.svg';
import trackingActive from '../../assets/track-by-id.svg';
import trackingGreen from '../../assets/order-success-icon.svg';
import { Card, Col, Row, Statistic } from 'antd';
import axios from "../../axios";
// import PointStoreContext from '../../stores/PointStore'

const Overview = () => {
    // const pointStore = useContext(PointStoreContext);
    const [data, setData] = useState({});
    let isLoading = false;
    let isError = false;
    let errors = "";

    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
        },
    };
    
    const getPointsStatics = () => {
        isError = false;
    
        axios
          .get("/V1/point/analysis", config)
          .then((response) => {
            setData(response.data);
            console.log("statistic from Api",response.data)
          })
          .catch((error) => {
            console.log("AXIOS ERROR in getPointStatics: ", error);
            isError = true;
          })
          .finally(() => {
            isLoading = false;
          });
    };
    useEffect(() => {
        getPointsStatics();
      }, []);
    // const statistic= pointStore.getPointStatics(`${localStorage.getItem("token")}`);
    return (
        <div className= "Overview-container container">         
            <div>
                <Row gutter={[16, 16]}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}
                        lg={{ span: 6 }} xl={{ span: 6 }}>
                        <Card 
                            style={{borderRadius: '7px'}}  bordered={false}>
                            <h3> 
                                <img src={trackingBlue}/>
                                <strong className="blue_light">Total Order</strong>
                            </h3>
                            <div className="cd-content">
                            {/* <Statistic className="mg-10px" style={{fontSize: '5px'}} value={112893} /> */}
                                {/* <h3>{statistic.Total_Orders}</h3> */}
                                <h3>{data.Total_Orders}</h3>
                                <h3>Your total Orders Number is {data.Total_Orders}</h3>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}
                        lg={{ span: 6 }} xl={{ span: 6 }}>
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
                        lg={{ span: 6 }} xl={{ span: 6 }}>
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
                    
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}
                        lg={{ span: 6 }} xl={{ span: 6 }}>
                        <Card 
                            style={{borderRadius: '7px'}}  bordered={false}>
                            <h3>
                                <img src={trackingActive}/>
                                <strong className="">Active points</strong>
                            </h3>
                            <div className="cd-content">
                                <h3>{data.Active_Points}</h3>
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