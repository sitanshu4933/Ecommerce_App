import { productConstant } from "../actions/constants";

const initstate = {
  products: [],
  loading: false,
  error: null,
};
export default (state = initstate, action) => {
  switch (action.type) {
    case productConstant.GET_ALL_PRODUCTS_SUCCESS:
      state = {
        ...state,
        products: action.payload,
        loading: false,
      };
      break;
  }
  return state;
};
