import { combineReducers } from 'redux'
import authenticationReducer from './authentication/authenticationReducer'
import bannerReducer from './banners/bannerReducer'
import cartReducer from './cart/cartReducer'
import categoryReducer from './category/categoryReducer'
import productReducers from './products/productReducers'

const rootReducers = combineReducers({
    getAuthenticationDetails: authenticationReducer,
    getCategoryDetails: categoryReducer,
    getProductDetails: productReducers,
    getBannerDetails: bannerReducer,
    getCartData: cartReducer
})

export default rootReducers