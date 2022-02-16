import { ADD_TO_CART, REMOVE_ITEM_FROM_CART } from "../actionType";

const cartState = {
    items:[]
}
const cartReducer = (state = cartState, action) => {

    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                items: action.payload
            }
        case REMOVE_ITEM_FROM_CART:
            return{
                ...state,
                items: action.payload
            }
        default:
            return state
    }

}

export default cartReducer;