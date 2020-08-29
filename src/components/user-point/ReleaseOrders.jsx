import React, { useEffect, useContext } from "react";
import { device } from "../../styles/device";
import styled from "styled-components";
import { Input, ConfigProvider, List, Pagination } from "antd";
import ShipmentCard from "./ShipmentCard";
import UserPointContext from "../../context/user-point/userPointContext";
import UserPointLoading from "./UserPointLoading";

const ReleaseOrders = () => {
  const userPointContext = useContext(UserPointContext);
  const { releasedOrders, loading, getReleaseOrders } = userPointContext;

  useEffect(() => {
    getReleaseOrders();
  }, []);

  const onPageChange = (page) => getReleaseOrders(page);
  const onSearch = async (text) => console.log(text);

  const { Search } = Input;
  return (
    <>
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
                dataSource={releasedOrders.data}
                renderItem={(item) => <ShipmentCard item={item} cardAction />}
              />
              <Pagination
                style={{ width: "fit-content", margin: "auto", ...styles.center }}
                onChange={onPageChange}
                current={releasedOrders.current_page}
                total={releasedOrders.total}
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
export default ReleaseOrders;
