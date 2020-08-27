import React, {useState, useContext, useEffect} from 'react';
import {useHistory, useParams,useLocation} from "react-router-dom";
import {Card, Col, PageHeader, Row, Skeleton, Descriptions ,ConfigProvider,Modal} from "antd";
import ReactCodeInput from 'react-verification-code-input';
import {SettingOutlined} from '@ant-design/icons';
import {colors} from "../../styles/global";
import {device} from "../../styles/device";
import styled from "styled-components";

const { confirm } = Modal;

const Confirmation = (item) => {
    let history = useHistory();
    let location = useLocation();
    let { shipment_id } = useParams();
    let [visible, setVisible] = useState(false);
    console.log("shipment id clicked--> ", shipment_id);

    const showModal = () => {setVisible(true)};
    const closeModal = () => {
        setVisible(false);
    };
    function success() {
        Modal.success({
            // className: 'aln-center',
            icon: <SettingOutlined className="color_primary"/>,
            title: <h2>Released!</h2>,
            content: <h3>The shipment has been delivered and released from your store</h3>,
            okText: <h4>Well done!</h4>,
            okType: 'ghost',
        });
    }

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
                // history.push(`${location.pathname}/${item.id}`);
                showModal();
                console.log("confimation--> ",location.pathname);
            }}
        >
            <Modal className="aln-center"
                visible={visible}
                closable={false}
                centered={true}
                style={{backgroundColor:'transparent'}}
                transparent={true}
                footer={null}
                >
                    <span className="aln-center">
                    <ReactCodeInput 
                        fields={4} 
                        onComplete={(value)=>{
                            closeModal()
                            console.log("done!!",value);
                            success()}}/>
                            
                    </span>
            </Modal>
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
const StyledModal = styled(Modal)`
  padding: 8px;
  width:-moz-available;
  color: white;
  h2{
  color: ${colors.color_primary};
  font-weight: 600;
  }
  h3 {
    color: #161616;
  }
  h4{
    color: ${colors.color_primary};
  }
`;
export default Confirmation;