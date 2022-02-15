import { ADD_TO_CART } from "../actionType"

export const addItemToCart = (data) => (dispatch, getState) => {
    return {
        type: ADD_TO_CART,
        payload: data,
        loader: false
    }
}

export const removeItemFromCart = () =>{

}

