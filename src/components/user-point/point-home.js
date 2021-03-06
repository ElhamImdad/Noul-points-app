import React, { useContext, useEffect } from "react";
import { Layout, PageHeader, Row, Col, Card } from "antd";
import { useHistory } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";
import trackingBlue from "../../assets/tracking-blue.svg";
import boxYellow from "../../assets/inproccess-icon.svg";
import trackingGreen from "../../assets/order-success-icon.svg";
import deliverdSVG from "../../assets/user-point/icons/deliverd.svg";
import inStoreSVG from "../../assets/user-point/icons/in-store.svg";
import cancelledSVG from "../../assets/user-point/icons/cancelled.svg";
import onGoingSVG from "../../assets/user-point/icons/on-going.svg";
import UserPointContext from "../../context/user-point/userPointContext";
import UserPointLoading from "./UserPointLoading";

const { Content } = Layout;

const PointHome = () => {
  const userPointContext = useContext(UserPointContext);
  const { analysis, loading, getAnalysis } = userPointContext;

  useEffect(() => {
    getAnalysis();
  }, []);

  const history = useHistory();
  return (
    <>
      <Layout>
        {loading ? (
          <UserPointLoading />
        ) : (
          <Content className="webview-container">
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Card style={{ borderRadius: "7px" }} bordered={false}>
                  <Row justify="space-around">
                    <strong
                      className="color_primary"
                      style={{ ...styles.verCenter, ...styles.dashboardNumber }}
                    >
                      {analysis.Total_Orders}
                    </strong>
                    <img src={deliverdSVG} width={dashboardIconWidth} alt="" />
                    <span
                      className="cd-content"
                      style={{ ...styles.verCenter }}
                    >
                      Total Orders
                    </span>
                  </Row>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Card style={{ borderRadius: "7px" }} bordered={false}>
                  <Row justify="space-around">
                    <strong
                      className="color_primary"
                      style={{ ...styles.verCenter, ...styles.dashboardNumber }}
                    >
                      {analysis.Released_Orders}
                    </strong>
                    <img src={inStoreSVG} width={dashboardIconWidth} alt="" />
                    <span
                      className="cd-content"
                      style={{ ...styles.verCenter }}
                    >
                      Released
                    </span>
                  </Row>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Card style={{ borderRadius: "7px" }} bordered={false}>
                  <Row justify="space-around">
                    <strong
                      className="color_primary"
                      style={{ ...styles.verCenter, ...styles.dashboardNumber }}
                    >
                      {analysis.onHold_Ordrs}
                    </strong>
                    <img src={cancelledSVG} width={dashboardIconWidth} alt="" />
                    <span
                      className="cd-content"
                      style={{ ...styles.verCenter }}
                    >
                      On Hold
                    </span>
                  </Row>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Card style={{ borderRadius: "7px" }} bordered={false}>
                  <Row justify="space-around">
                    <strong
                      className="color_primary"
                      style={{ ...styles.verCenter, ...styles.dashboardNumber }}
                    >
                      {analysis.onHold_Ordrs}
                    </strong>
                    <img src={onGoingSVG} width={dashboardIconWidth} alt="" />
                    <span
                      className="cd-content"
                      style={{ ...styles.verCenter }}
                    >
                      On Going
                    </span>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card
                  style={{ borderRadius: "7px", height: "100%" }}
                  bordered={false}
                  onClick={() => history.push("/release")}
                >
                  <Row justify="space-around">
                    <img src={trackingBlue} alt="" />
                    <h3  style={{textAlign: "center", ...styles.verCenter}}>
                      <strong>Release Shipments</strong>
                    </h3>
                    <h4 style={{textAlign: "center", ...styles.verCenter}}>Browse {"&"} release</h4>
                  </Row>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card
                  style={{ borderRadius: "7px", height: "100%" }}
                  bordered={false}
                  onClick={() => history.push("/recieve")}
                >
                  <Row justify="space-around">
                    <img src={trackingGreen} alt="" />
                    <h3 style={{textAlign: "center", ...styles.verCenter}}>
                      <strong>Receive Shipments</strong>
                    </h3>
                    <h4 style={{textAlign: "center", ...styles.verCenter}}>Scan the QR-Code</h4>
                  </Row>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Card
                  style={{ borderRadius: "7px", height: "100%" }}
                  bordered={false}
                  onClick={() => history.push("/orders")}
                >
                  <Row justify="space-around" align="center">
                    <img src={boxYellow} alt=""/>
                    <h3 style={{textAlign: "center", ...styles.verCenter}}>
                      <strong>All Orders</strong>
                    </h3>
                    <h4 style={{textAlign: "center", ...styles.verCenter}}>Browse all orders</h4>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Content>
        )}
      </Layout>
    </>
  );
};
const styles = {};
styles.verCenter = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
};

styles.dashboardNumber = {
  fontSize: "2rem",
  paddingTop: "10px",
};

const dashboardIconWidth = 30;

export default PointHome;
