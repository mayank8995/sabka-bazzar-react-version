import { GET_BANNERS } from "../actionType";

const bannerState = {
    bannerList: []
}
const bannerReducer = (state = bannerState, action) =>{
    switch(action.type){
        case GET_BANNERS:
            return {
                ...state,
                bannerList: action.payload
            };
        default:
            return state
    }
}
export default bannerReducer;