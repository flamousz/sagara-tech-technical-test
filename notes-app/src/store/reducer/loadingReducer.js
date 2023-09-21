import { IS_LOADING_FALSE, IS_LOADING_TRUE } from "../action/actionType";


let initialState = {
    isLoading: false
}


export default function loadingReducer(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING_FALSE:
            return {
                ...state,
                isLoading: false
            }

        case IS_LOADING_TRUE:
            return {
                ...state,
                isLoading:true
            }    
    
        default:
            return state
    }
}