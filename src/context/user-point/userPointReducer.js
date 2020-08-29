import {
  SET_ANALYSIS,
  SET_LOADING,
  SET_ALL_ORDERS,
  SET_RELEASED_ORDERS,
} from "./userPointActions";

const UserPointReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ANALYSIS:
      return {
        ...state,
        analysis: { ...action.payload },
        loading: false,
      };
    case SET_ALL_ORDERS:
      return {
        ...state,
        allOrders: { ...action.payload },
        loading: false,
      };
    case SET_RELEASED_ORDERS:
      return {
        ...state,
        releasedOrders: { ...action.payload },
        loading: false,
      };
    default:
      return state;
  }
};

export default UserPointReducer;
