import React from "react";
import { Card, Skeleton, Descriptions, ConfigProvider } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import { colors } from "../../styles/global";
import { device } from "../../styles/device";
import styled from "styled-components";

const ShipmentCard = ({ item, cardAction }) => {
  let history = useHistory();
  let location = useLocation();
  return (
    <ConfigProvider>
      <StyledCard
        actions={cardAction ? [
          <h2
            style={{
              ...styles.verCenter,
              margin: "0 auto",
              marginTop: ".3rem",
            }}
          >
            Release
          </h2>,
        ] : []}
        onClick={() => {
          if (cardAction) history.push(`${location.pathname}/${item.tracking_id}`);
        }}
        key={item.name}
      >
        <Skeleton avatar title={false} loading={false} active>
          <h3>{item.name}</h3>
          <Descriptions size="small" column={2}>
            <Descriptions.Item label="Tracking ID">
              <h4 className="color_primary">{item.tracking_id}</h4>
            </Descriptions.Item>
            <Descriptions.Item label="Order Status">
              <h4>{item.order_status.status}</h4>
            </Descriptions.Item>
            <Descriptions.Item label="Sender">
              <h4>{item.sender.sender_name}</h4>
            </Descriptions.Item>
            <Descriptions.Item label="From">
              <h4>{item.sender.sender_address}</h4>
            </Descriptions.Item>
            <Descriptions.Item label="Reciever">
              <h4>{item.receiver.receiver_name}</h4>
            </Descriptions.Item>
            <Descriptions.Item label="To">
              <h4>{item.receiver.receiver_address}</h4>
            </Descriptions.Item>
          </Descriptions>
        </Skeleton>
      </StyledCard>
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

const styles = {};
styles.verCenter = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
};

export default ShipmentCard;
