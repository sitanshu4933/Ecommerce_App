import { authConstant } from "../actions/constants"

const intialState = {
    token: null,
    user: {
        firstname: '',
        lastname: '',
        email: '',
        picture: ''
    },
    authenticating: false,
    authenticated: false,
    loading:false,
    error:null,
    message:""
}

export default (state = intialState, action) => {
    switch (action.type) {
        case authConstant.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authConstant.LOGIN_SUCCESS:
            state = {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                authenticating: false,
                authenticated: true
            }
            break;
        case authConstant.LOGIN_FAILURE:
            state = {
                ...state
            }
            break;
        case authConstant.LOGOUT_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case authConstant.LOGOUT_SUCCESS:
            state = {
                ...intialState,
                message:action.payload.message
            }
            break;
        case authConstant.LOGOUT_FAILURE:
            state = {
                ...state,
                error:action.payload.error,
                loading:false
            }
            break;
    }
    return state
}