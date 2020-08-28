import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { colors } from "../../styles/global";

const UserPointLoading = () => {
  return (
    <div
      style={{
        margin: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoadingOutlined
        style={{ fontSize: "3rem", color: colors.color_primary }}
      />
    </div>
  );
};

export default UserPointLoading;
