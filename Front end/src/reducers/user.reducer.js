import { userConstant } from "../actions/constants";

const intialState = {
  error: null,
  message: "",
  loading: false,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case userConstant.SIGNUP_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstant.SIGNUP_SUCCESS:
      state = {
        ...state,
        loading: false,
        message:"user created successfully"
      };
      break;
    case userConstant.SIGNUP_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};
