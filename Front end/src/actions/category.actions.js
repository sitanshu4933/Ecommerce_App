import axios from "../helpers/axios";
import { categoryConstant } from "./constants";

export const getAllCategories = () => {
  return async (dispatch) => {
    dispatch({ type: categoryConstant.GET_ALL_CATEGORIES_REQUEST });
    const res = await axios.get("/category/getcategory");
    if (res.status === 200) {
      dispatch({
        type: categoryConstant.GET_ALL_CATEGORIES_SUCCESS,
        payload: res.data.categorylist,
      });
    } else {
      dispatch({
        type: categoryConstant.GET_ALL_CATEGORIES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const addCategory = (form) => {
  return async (dispatch) => {
    dispatch({ type: categoryConstant.CREATE_NEW_CATEGORY_REQUEST });
    const res = await axios.post("/category/create", form);
    if (res.status === 200) {
      dispatch({
        type: categoryConstant.CREATE_NEW_CATEGORY_SUCCESS,
        payload: res.data.category,
      });
    }else{
      dispatch({type:categoryConstant.CREATE_NEW_CATEGORY_FAILURE})
    }
  };
};
