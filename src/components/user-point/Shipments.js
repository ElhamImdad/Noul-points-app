import React from 'react';
import {device} from "../../styles/device";
import styled from "styled-components";
import { Layout,PageHeader, Row, Col, Button,Space,Input,ConfigProvider,List } from 'antd';
import {SettingOutlined} from '@ant-design/icons';
import {StyledSearch} from "../global-styled-components/Inputs";
import {PrimaryButton} from "../global-styled-components/Buttons";
import ShipmentCard from './ShipmentCard';

const Shipments = () => {
    const {Search} = Input;
    console.log("shipments page")
    return (
        <>
            <PageHeader
                className="webview-header ant-page-header-heading-title"
                onBack={() => null}
                title={"Released Shipments"}
                extra={<SettingOutlined />}
            />
            <div className="webview-container">
            <Row gutter={[16, 16]} justify="center">
                <Col>
                    <Search
                        placeholder="Search"
                        onSearch={async (value) => {
                            console.log(value);
                        }}
                        height="available"
                    />
                </Col>
                <Col>
                    <Button className="excel-button" >
                        <i>
                            <SettingOutlined/>
                        </i>
                    </Button>
                </Col>
            </Row>
            <Wrapper>
                <ConfigProvider
                //  direction={i18next.dir()}
                 >
                    <List
                        grid={{
                            gutter: 16,
                            xs: 1,sm: 1,md: 1,lg: 1,xl: 1,xxl:1,
                        }}
                        style={{width: '-moz-available'}}
                        // pagination={{
                        //     onChange: (page) => {},
                        //     pageSize: 6,
                        //     size: "small"
                        // }}
                        dataSource={PointList}
                        renderItem={(item) => (
                            <ShipmentCard item={item}/>
                        )}
                    />
                </ConfigProvider>
            </Wrapper>
            </div>
        </>
    );
};

const Wrapper = styled.div`
  margin: 1em;
   @media (${device.mobileL}) {
      margin: .5em;
    }
`;
 const PointList = [
    {   key: '1',
        name: 'Elham Saleem',
        shipmentNo: '1234567890',
        shipmentDate: '2020-20-20',
        ocd: '34.5',
        quantity: '2',
        id:"elham-1"

    },
    {   key: '2',
        name: 'Amal Saleem',
        shipmentNo: '1234567890',
        shipmentDate: '2020-20-20',
        ocd: '34.5',
        quantity: '2',
        id:"amal-2"
    }

    ]
export default Shipments;