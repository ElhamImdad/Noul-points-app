import React from "react";
import UserPointContext from "./userPointContext";
import UserPointReducer from "./userPointReducer";
import { useReducer } from "react";
import axios from "../../axios";
import { SET_ANALYSIS, SET_LOADING, SET_ALL_ORDERS } from "./userPointActions";

const headers = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  Accept: "application/json",
});

const UserPointState = (props) => {
  const initailState = {
    loading: false,
    analysis: {},
    allOrders: {},
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

  return (
    <UserPointContext.Provider
      value={{
        loading: state.loading,
        analysis: state.analysis,
        allOrders: state.allOrders,
        getAnalysis,
        getAllOrders,
      }}
    >
      {props.children}
    </UserPointContext.Provider>
  );
};

export default UserPointState;
