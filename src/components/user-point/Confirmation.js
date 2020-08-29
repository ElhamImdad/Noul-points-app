import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  PageHeader,
  Skeleton,
  Descriptions,
  ConfigProvider,
  Modal,
} from "antd";
import ReactCodeInput from "react-verification-code-input";
import {
  CloseCircleOutlined,
  CheckCircleOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { colors } from "../../styles/global";
import { device } from "../../styles/device";
import styled from "styled-components";
import UserPointContext from "../../context/user-point/userPointContext";

const Confirmation = (props) => {
  const userPointContext = useContext(UserPointContext);
  const { releaseOrder, confirmingReleaseOrder } = userPointContext;

  let { tracking_id } = useParams();

  let [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  const release = async (otp) => {
    try {
      await releaseOrder({ tracking_id, otp });
      showSuccess();
    } catch (error) {
      showError();
    }
  };

  const showSuccess = () => {
    Modal.success({
      icon: <CheckCircleOutlined className="color_primary" />,
      title: <h2>Released!</h2>,
      content: (
        <h3>The shipment has been delivered and released from your store</h3>
      ),
      okText: <h4>Ok</h4>,
      okType: "ghost",
    });
  };

  const showError = () => {
    Modal.error({
      icon: <CloseCircleOutlined className="color_primary" />,
      title: <h2>NOT Released</h2>,
      content: <h3>Some error ocured during this process</h3>,
      okText: <h4>Ok</h4>,
      okType: "ghost",
    });
  };

  return (
    <ConfigProvider>
      <PageHeader
        className="webview-header ant-page-header-heading-title"
        onBack={() => null}
        title={"Confirmation"}
        extra={<BellOutlined style={{ color: "#fff" }} />}
      />
      <div className="webview-container mg-bottom-30px">
        <StyledCard
          actions={[<h2>Confirm releasing</h2>]}
          onClick={() => showModal()}
        >
          <Modal
            className="aln-center"
            visible={visible}
            closable={false}
            centered={true}
            style={{ backgroundColor: "transparent" }}
            transparent={true}
            footer={null}
          >
            <h3>Please enter OTP</h3>
            <span className="aln-center">
              <ReactCodeInput
                fields={6}
                onComplete={(value) => {
                  closeModal();
                  release(value);
                }}
              />
            </span>
          </Modal>

          <Skeleton avatar title={false} loading={false} active>
            <Descriptions size="small" column={2}>
              <Descriptions.Item label="Tracking ID">
                <h4 className="color_primary">{confirmingReleaseOrder.tracking_id}</h4>
              </Descriptions.Item>
              <Descriptions.Item label="Order Status">
                <h4>{confirmingReleaseOrder.order_status.status}</h4>
              </Descriptions.Item>
              <Descriptions.Item label="Sender">
                <h4>{confirmingReleaseOrder.sender.sender_name}</h4>
              </Descriptions.Item>
              <Descriptions.Item label="From">
                <h4>{confirmingReleaseOrder.sender.sender_address}</h4>
              </Descriptions.Item>
              <Descriptions.Item label="Reciever">
                <h4>{confirmingReleaseOrder.receiver.receiver_name}</h4>
              </Descriptions.Item>
              <Descriptions.Item label="To">
                <h4>{confirmingReleaseOrder.receiver.receiver_address}</h4>
              </Descriptions.Item>
            </Descriptions>
          </Skeleton>
        </StyledCard>
      </div>
    </ConfigProvider>
  );
};

const StyledCard = styled(Card)`
  margin: 8px;
  width: -moz-available;
  color: white;
  border: ${colors.color_primary};
  h2 {
    color: ${colors.color_primary};
  }
  h3 {
    color: #161616;
    font-weight: 700;
  }
  h4 {
    color: #161616;
    font-weight: 600;
  }
  border: 0.2px solid ${colors.light_grey};
  border-radius: 16px;
  .user-dropdown-avatar {
    margin: 1em 0;
  }
  @media (${device.mobileL}) {
    height: fit-content;
  }
  .ant-card-actions {
    margin: 0;
    padding: 0;
    list-style: none;
    background: #fafafa;
    border-top: 1px solid #f0f0f0;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  .ant-card-actions > li {
    float: left;
    margin: 0 0;
    text-align: center;
  }
`;
export default Confirmation;
