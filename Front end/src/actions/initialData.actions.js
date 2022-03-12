import {
  authConstant,
  categoryConstant,
  initialDataConstant,
  productConstant,
} from "./constants";
import axios from "../helpers/axios";

export const initialData = () => {
  return async (dispatch) => {
    const res = await axios.get("/initialData");
    if (res.status === 200) {
      const { categories, products } = res.data;
      dispatch({
        type: categoryConstant.GET_ALL_CATEGORIES_SUCCESS,
        payload: categories,
      });
      dispatch({
        type: productConstant.GET_ALL_PRODUCTS_SUCCESS,
        payload: products,
      });
    }
  };
};
