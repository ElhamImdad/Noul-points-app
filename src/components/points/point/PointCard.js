import React, {FC, useContext, useEffect, useState} from "react";
// import {useTranslation} from "react-i18next";
import {Card, Col, List, Row, Skeleton, Tag,} from "antd";
import styled from "styled-components";
// import {colors} from "../../../../styles/global";
import {Link, useHistory, useLocation} from "react-router-dom";
import {EnvironmentOutlined, PhoneOutlined} from "@ant-design/icons"
// import {device} from "../../../../styles/device";
// import {DotsVerticalRounded} from "@styled-icons/boxicons-regular/DotsVerticalRounded";


const PointCard =({item}) => {
    // const {t} = useTranslation();
    let history = useHistory();
    let location = useLocation();

    return (
        <StyledCard>
            <List.Item
                key={item.name}
                onClick={() => {
                    history.push(`${location.pathname}/${item.id}`);
                }}
                style={{width: '-moz-available'}}
            >
                <Skeleton
                    avatar
                    title={false}
                    loading={false}
                    active
                >
                    <Row gutter={[16, 16]}>
                        <Col md={14} xs={24}>
                            {/* <Link to="/points/1"> */}
                                <h2><strong>{item.name}</strong></h2>
                            {/* </Link> */}
                            <h3 className="icons-style"><EnvironmentOutlined className="icons-style"/>{item.address}
                            </h3>
                            <h3 className="icons-style"><PhoneOutlined className="icons-style"/>+{item.mobile}</h3>
                        </Col>
                        <Col md={6} xs={24}>
                            <Row gutter={[16, 16]}>
                                <Col md={24} xs={12}>
                                    <h3>
                                        On Hold
                                    </h3>
                                    <h3 className="text-color-yello">
                                        {item.on_hold}
                                    </h3>
                                </Col>
                                <Col md={24} xs={12}>
                                    <h3>
                                        Released
                                    </h3>
                                    <h3 className="text-color-green">
                                        {item.released}
                                    </h3>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            {
                                item.isActive === 0? 
                                <Tag color="volcano" key={true}>Inactive</Tag>:
                                <Tag color="success" key={true}>Active</Tag>
                            }
                        </Col>
                    </Row>
                </Skeleton>
            </List.Item>
        </StyledCard>

    );
};

const StyledCard = styled(Card)`
  margin: 1em;
  width:-moz-available;
  color: white;
  height: 210px;
  border: {colors.color_primary};
  h2{
  color: {colors.color_primary};
  }
  h3,
  h4 {
    color: #161616;
    font-weight: 700;
  }
   border: .2px solid {colors.light_grey};
  border-radius: 16px;
  .user-dropdown-avatar {
    margin: 1em 0;
  }

.icons-style{
color: {colors.light_grey};
margin-inline-end: 8px;
}
  .ant-col.ant-col-xs-6.ant-col-rtl {
    vertical-align: middle;
    margin-top: 17%;
  }
  .ant-col-xs-18 {
    display: block;
    flex: none;
 max-width: 100%;
  }
   @media ({device.mobileL}) {
      height: fit-content;

    }
`;
const DotsMenu = styled("DotsVerticalRounded")`
font-size: 14px;
color: black;
width: 22px;
`;
export default PointCard;
