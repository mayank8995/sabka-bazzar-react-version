import { ADD_TO_CART } from "../actionType";

const cartState = {
    count:0,
    items:[]
}
const cartReducer = (state = cartState, action) => {

    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                count: state.items.length +1,
                items: [...state.items,...action.payload]
            }
        default:
            return state
    }

}

export default cartReducer;