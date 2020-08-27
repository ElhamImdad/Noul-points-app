import React, {useState, useContext, useEffect} from 'react';
import {useHistory, useParams,useLocation} from "react-router-dom";
import {Card, Col, PageHeader, Row, Skeleton, Descriptions ,ConfigProvider} from "antd";
import {SettingOutlined} from '@ant-design/icons';
import {colors} from "../../styles/global";
import {device} from "../../styles/device";
import styled from "styled-components";

const Confirmation = (item) => {
    let history = useHistory();
    let location = useLocation();
    let { shipment_id } = useParams();
    console.log("shipment id clicked--> ", shipment_id);

    return (
        <ConfigProvider 
        // direction={i18next.dir()}
        >
        <PageHeader
            className="webview-header ant-page-header-heading-title"
            onBack={() => null}
            title={"Confirmation"}
            extra={<SettingOutlined />}
        />
        <div className="webview-container mg-bottom-30px">
        <StyledCard 
            actions={[ <h2>Confirm releasing</h2>, ]}
            key={item.name}
            onClick={() => {
                history.push(`${location.pathname}/${item.id}`);
                console.log("location path--",location.pathname)
            }}
        >
            <Skeleton
                avatar
                title={false}
                loading={false}
                active
            >
                <h3>{item.name}</h3>
                <Descriptions size="small" column={2}>
                    <Descriptions.Item label="shipment No"><h4 className="color_primary">{"item.shipmentNo"}</h4></Descriptions.Item>
                    <Descriptions.Item label="Shipment Date"><h4>{"item.shipmentDate"}</h4></Descriptions.Item>
                    <Descriptions.Item label="OCD"><h4>{"item.ocd"}</h4></Descriptions.Item>
                    <Descriptions.Item label="Quantity"><h4>{"item.quantity"}</h4></Descriptions.Item>
                </Descriptions>
            </Skeleton>
        </StyledCard>
        </div>
        </ConfigProvider>
    );
};

const StyledCard = styled(Card)`
  margin: 8px;
  width:-moz-available;
  color: white;
  border: ${colors.color_primary};
  h2{
  color: ${colors.color_primary};
  }
  h3 {
    color: #161616;
    font-weight: 700;
  }
  h4{
    color: #161616;
    font-weight: 600;
  }
   border: .2px solid ${colors.light_grey};
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