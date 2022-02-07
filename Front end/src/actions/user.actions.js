import { userConstant } from "./constants";
import axios from "../helpers/axios";

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: userConstant.SIGNUP_REQUEST });
    const res = await axios.post("/admin/signup", {
      ...user,
    });
    if (res.status === 400) {
      console.log("signup failure");
      dispatch({
        type: userConstant.SIGNUP_FAILURE,
        payload: { error: res.data.message }
      });
    }
    if (res.status === 200) {
      dispatch({
        type: userConstant.SIGNUP_SUCCESS,
        payload: { message: res.data.message }
      });
    }
  };
};
