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
                 ...initstate,
                 loading:true
             }
             break
        case categoryConstant.GET_ALL_CATEGORIES_SUCCESS:
            state={
                ...initstate,
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
     }
     return state
}