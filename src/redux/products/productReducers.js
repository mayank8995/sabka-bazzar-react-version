import {GET_PRODUCTS } from "../actionType";


const productState = {
    productList: []
}

const productReducers = (state = productState, action) =>{
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                productList: action.payload
            };
        default:
            return state
    }
}

export default productReducers;