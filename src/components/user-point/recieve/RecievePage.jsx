import React from "react";
import { PageHeader, Layout, Row, Col, Card, Button } from "antd";
import { BellOutlined, DeleteOutlined, QrcodeOutlined } from "@ant-design/icons";
import { PrimaryButton } from "../../global-styled-components/Buttons";

const { Header, Footer, Content } = Layout;

const fakeData = {};
fakeData.shipmentsNo = [
    620001250120,620001250120,620001250120,620001250120,620001250120
]

const RecievePage = () => {
  return (
    <>
      <Layout>
        <PageHeader
          className="webview-header ant-page-header-heading-title"
          onBack={() => null}
          title="Scan"
          extra={<BellOutlined style={{color: "#fff"}} />}
        />

        <Content className="webview-container" style={{display: "flex", flexDirection: "column"}}>

        <Row gutter={[16, 16]}>
            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                <Button style={{display: "block", width: "100%", borderRadius: "50px"}}>+ Add</Button>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <Card style={{ borderRadius: "50px", height:"100%" }} bodyStyle={{...styles.center , padding: "0px", height:"100%"}} bordered>
                <QrcodeOutlined style={{ fontSize: '16px' }} />
              </Card>
            </Col>
          </Row>
          <hr/>

          {fakeData.shipmentsNo.map((sn, i) => 
            <Row gutter={[16, 16]} key={i}>
            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
              <Card style={{ borderRadius: "50px" }} bodyStyle={{padding: "16px"}} bordered>
                Shipment NO. <span className="color_primary">{sn}</span>
              </Card>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <Card style={{ borderRadius: "50px", height:"100%" }} bodyStyle={{...styles.center , padding: "0px", height:"100%"}} bordered>
                <DeleteOutlined style={{ fontSize: '16px' }} />
              </Card>
            </Col>
          </Row>
          )}
          

          <Row gutter={[16, 16]} style={{marginTop: "auto"}}>
            <Col xs={20} sm={20} md={20} lg={20} xl={20} style={{margin: "auto"}}>
              <PrimaryButton style={{display: "block", width: "100%", borderRadius: "50px"}}>done</PrimaryButton>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

const styles = {};
styles.center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}



export default RecievePage;
