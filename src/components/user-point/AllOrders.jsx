import React, { useEffect, useContext } from "react";
import { device } from "../../styles/device";
import styled from "styled-components";
import {
  PageHeader,
  Row,
  Col,
  Button,
  Input,
  ConfigProvider,
  List,
  Pagination,
} from "antd";
import { QrcodeOutlined, BellOutlined } from "@ant-design/icons";
import ShipmentCard from "./ShipmentCard";
import UserPointContext from "../../context/user-point/userPointContext";
import UserPointLoading from "./UserPointLoading";

const AllOrders = () => {
  const userPointContext = useContext(UserPointContext);
  const { allOrders, loading, getAllOrders } = userPointContext;

  useEffect(() => {
    getAllOrders();
  }, []);

  const onPageChange = (page) => getAllOrders(page);
  const onSearch = async (text) => console.log(text);

  const { Search } = Input;
  return (
    <>
      <PageHeader
        className="webview-header ant-page-header-heading-title"
        onBack={() => null}
        title={"All Orders"}
        extra={<BellOutlined style={{ color: "#fff" }} />}
      />
      <div className="webview-container">
        {loading ? (
          <UserPointLoading />
        ) : (
          <Wrapper>
            <Search
              placeholder="Search"
              onSearch={onSearch}
              height="available"
              style={{
                borderRadius: "50px",
              }}
            />
            <ConfigProvider>
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 1,
                  md: 1,
                  lg: 1,
                  xl: 1,
                  xxl: 1,
                }}
                style={{ width: "-moz-available" }}
                dataSource={allOrders.data}
                renderItem={(item) => (
                  <ShipmentCard item={item} cardAction={false} />
                )}
              />
              <Pagination
                style={{ width: "fit-content", margin: "auto" }}
                onChange={onPageChange}
                current={allOrders.current_page}
                total={allOrders.total}
              />
            </ConfigProvider>
          </Wrapper>
        )}
      </div>
    </>
  );
};

const Wrapper = styled.div`
  margin: 1em;
  @media (${device.mobileL}) {
    margin: 0.5em;
  }
`;

const styles = {};
styles.center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export default AllOrders;
