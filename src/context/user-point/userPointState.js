import React from "react";
import UserPointContext from "./userPointContext";
import UserPointReducer from "./userPointReducer";
import { useReducer } from "react";
import axios from "../../axios";
import {
  SET_ANALYSIS,
  SET_LOADING,
  SET_ALL_ORDERS,
  SET_RELEASED_ORDERS,
} from "./userPointActions";

const headers = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  Accept: "application/json",
});

const UserPointState = (props) => {
  const initailState = {
    loading: false,
    analysis: {},
    allOrders: {},
    releasedOrders: {},
  };

  const [state, dispatch] = useReducer(UserPointReducer, initailState);

  const getAnalysis = async () => {
    dispatch({ type: SET_LOADING });
    const res = await axios.get(`/V1/user-point/analysis`, {
      headers: headers(),
    });
    dispatch({ type: SET_ANALYSIS, payload: res.data });
  };

  const getAllOrders = async (page = 1) => {
    dispatch({ type: SET_LOADING });
    const res = await axios.get(`/V1/user-point/orders?page=${page}`, {
      headers: headers(),
    });
    dispatch({ type: SET_ALL_ORDERS, payload: res.data });
  };

  const getReleaseOrders = async (page = 1) => {
    dispatch({ type: SET_LOADING });
    const res = await axios.get(`/V1/user-point/orders?get=release&page=${page}`, {
      headers: headers(),
    });
    dispatch({ type: SET_RELEASED_ORDERS, payload: res.data });
  };

  const releaseOrder = async ({ tracking_id, otp }) => {
    const res = await axios.post(
      `/V1/user-point/release-order`,
      [{ tracking_id, OTP: otp }],
      {
        headers: headers(),
      }
    );
  };

  return (
    <UserPointContext.Provider
      value={{
        loading: state.loading,
        analysis: state.analysis,
        allOrders: state.allOrders,
        releasedOrders: state.releasedOrders,
        getAnalysis,
        getAllOrders,
        getReleaseOrders,
        releaseOrder,
      }}
    >
      {props.children}
    </UserPointContext.Provider>
  );
};

export default UserPointState;
