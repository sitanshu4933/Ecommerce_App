import { categoryConstant } from "../actions/constants" 

const initstate={
    category:[],
    loading:false,
    error:null
}

export default (state=initstate,action)=>{
     switch (action.type){
         case categoryConstant.GET_ALL_CATEGORIES_REQUEST:
             state={
                 ...state,
                 loading:true
             }
             break
        case categoryConstant.GET_ALL_CATEGORIES_SUCCESS:
            state={
                ...state,
                category:action.payload,
                loading:false
            }
            break
        case categoryConstant.GET_ALL_CATEGORIES_FAILURE:
            state={
                ...initstate,
                loading:true,
                error:action.payload.error
            }
            break
        case categoryConstant.CREATE_NEW_CATEGORY_REQUEST:
            state={
                ...state,
                loading:true
            }
            break
        case categoryConstant.CREATE_NEW_CATEGORY_SUCCESS:
            state={
                ...state,
                loading:false
            }
            break
        case categoryConstant.CREATE_NEW_CATEGORY_FAILURE:
            state={
                ...initstate,
                loading:true
            }
            break
     }
     return state
}