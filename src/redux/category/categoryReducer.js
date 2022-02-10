import { GET_CATEGORIES } from "../actionType";

const categoryState = {
    categoryList: []
}
const categoryReducer = (state = categoryState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categoryList: action.payload
            }
        default:
            return state
    }
}

export default categoryReducer;