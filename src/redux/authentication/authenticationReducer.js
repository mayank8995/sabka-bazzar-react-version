import { SIGN_UP } from "../actionType";

const authState = {
    signUp:[]
}
const authenticationReducer = (state = authState, action) =>{

    switch(action.type){
        case SIGN_UP:
            return{
                ...state,
                signUp: [...state.signUp, action.payload]
            }
        default:
            return state;
    }

}

export default authenticationReducer;