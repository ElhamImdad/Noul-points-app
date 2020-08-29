import React, { useState, useContext } from "react";
import { Layout, Row, Col, Card, Button, Input, Modal } from "antd";
import {
  DeleteOutlined,
  QrcodeOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { PrimaryButton } from "../../global-styled-components/Buttons";
import QrReader from "react-qr-reader";
import UserPointContext from "../../../context/user-point/userPointContext";

const { Content } = Layout;

const RecievePage = () => {
  const userPointContext = useContext(UserPointContext);
  const { updateOrderStatus } = userPointContext;

  const [qrVisible, setQrVisible] = useState(false);
  const showQR = () => setQrVisible(() => true);
  const closeQR = () => setQrVisible(() => false);

  const [inputModalVisible, setInputModalVisible] = useState(false);
  const showInputModal = () => setInputModalVisible(() => true);
  const closeInputModal = () => setInputModalVisible(() => false);

  const [items, setItems] = useState([]);

  const [newTID, setNewTID] = useState("");

  const onScanError = (e) => {
    console.log("scan error", e);
  };
  const onScan = (data) => {
    if (!data) return;
    setNewTID(data);
    closeQR();
    showInputModal();
  };

  const onAdd = () => {
    setItems([...items, { tracking_id: newTID, order_status_id: 1110 }]);
    setNewTID("");
    closeInputModal();
  };

  const remove = (tracking_id) => {
    setItems(items.filter((i) => i.tracking_id !== tracking_id));
  };

  const recieveOrders = async () => {
    try {
      const resData = await updateOrderStatus(items);
      showSuccess(resData.data);
      setItems([]);
    } catch (error) {
      showError();
    }
  };

  const showSuccess = (recievedItems) => {
    Modal.success({
      icon: <CheckCircleOutlined className="color_primary" />,
      title: <h2>Released!</h2>,
      content: (
        <>
          <h3>The items with the following tracking IDs has been released:</h3>
          <ul>
            {recievedItems.map((i) => (
              <li>{i.tracking_id}</li>
            ))}
          </ul>
        </>
      ),
      okText: <h4>Ok</h4>,
      okType: "ghost",
      centered: true
    });
  };

  const showError = () => {
    Modal.error({
      icon: <CloseCircleOutlined className="color_primary" />,
      title: <h2>NOT Recieved</h2>,
      content: <h3>Some error ocured during this process</h3>,
      okText: <h4>Ok</h4>,
      okType: "ghost",
      centered: true
    });
  };

  return (
    <>
      <Layout>
        <Content
          className="webview-container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/* QR Scanner Modal */}
          <Modal
            className="aln-center"
            visible={qrVisible}
            closable={true}
            centered={true}
            style={{ backgroundColor: "transparent" }}
            transparent={true}
            footer={null}
            onCancel={closeQR}
          >
            <h3>Scan the QR-Code of the tracking ID</h3>
            <span className="aln-center">
              {qrVisible && (
                <QrReader
                  delay={300}
                  onError={onScanError}
                  onScan={onScan}
                  style={{ width: "100%" }}
                  facingMode="environment"
                />
              )}
            </span>
          </Modal>

          {/* Input Modal */}
          <Modal
            className="aln-center"
            visible={inputModalVisible}
            closable={true}
            centered={true}
            style={{ backgroundColor: "transparent" }}
            transparent={true}
            footer={null}
            onCancel={closeInputModal}
          >
            <h3>Enter tracking ID</h3>
            <span className="aln-center" style={{ flexDirection: "column" }}>
              {inputModalVisible && (
                <>
                  <Input
                    placeholder="+ Add"
                    defaultValue={newTID}
                    style={{ borderRadius: "50px", marginTop: "10px" }}
                    onChange={(e) => setNewTID(e.target.value)}
                    autoFocus
                  />
                  <PrimaryButton
                    onClick={onAdd}
                    style={{ borderRadius: "50px", marginTop: "10px" }}
                  >
                    Add to list
                  </PrimaryButton>
                </>
              )}
            </span>
          </Modal>

          <Row gutter={[16, 16]}>
            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
              <Button
                style={{
                  display: "block",
                  width: "100%",
                  borderRadius: "50px",
                }}
                onClick={showInputModal}
              >
                + Add
              </Button>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <Card
                onClick={showQR}
                style={{ borderRadius: "50px", height: "100%" }}
                bodyStyle={{ ...styles.center, padding: "0px", height: "100%" }}
                bordered
              >
                <QrcodeOutlined style={{ fontSize: "16px" }} />
              </Card>
            </Col>
          </Row>
          <hr />

          {items
            .map((item, i) => (
              <Row gutter={[16, 16]} key={i}>
                <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                  <Card
                    style={{ borderRadius: "50px" }}
                    bodyStyle={{ padding: "16px" }}
                    bordered
                  >
                    Tracking ID:{" "}
                    <span className="color_primary">{item.tracking_id}</span>
                  </Card>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <Card
                    style={{ borderRadius: "50px", height: "100%" }}
                    bodyStyle={{
                      ...styles.center,
                      padding: "0px",
                      height: "100%",
                    }}
                    bordered
                    onClick={() => remove(item.tracking_id)}
                  >
                    <DeleteOutlined style={{ fontSize: "16px" }} />
                  </Card>
                </Col>
              </Row>
            ))
            .reverse()}

          <Row
            gutter={[16, 16]}
            style={{ marginTop: "auto", marginBottom: "60px" }}
          >
            <Col
              xs={24}
              sm={20}
              md={18}
              lg={16}
              xl={14}
              style={{ margin: "auto" }}
            >
              <PrimaryButton
                style={{
                  display: "block",
                  width: "100%",
                  borderRadius: "50px",
                }}
                disabled={items.length <= 0}
                onClick={recieveOrders}
              >
                done
              </PrimaryButton>
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
  alignItems: "center",
};

export default RecievePage;
