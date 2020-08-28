import React from "react";
import UserPointContext from "./userPointContext";
import UserPointReducer from "./userPointReducer";
import { useReducer } from "react";
import axios from "../../axios";
import { SET_ANALYSIS, SET_LOADING } from "./userPointActions";

const headers = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  Accept: "application/json",
});

const UserPointState = (props) => {
  const initailState = {
    analysis: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(UserPointReducer, initailState);

  const getAnalysis = async () => {
    dispatch({ type: SET_LOADING });
    const res = await axios.get(`/V1/user-point/analysis`, {
      headers: headers(),
    });
    dispatch({ type: SET_ANALYSIS, payload: res.data });
  };

  return (
    <UserPointContext.Provider
      value={{
        loading: state.loading,
        analysis: state.analysis,
        getAnalysis,
      }}
    >
      {props.children}
    </UserPointContext.Provider>
  );
};

export default UserPointState;
