import { combineReducers } from 'redux'
import authenticationReducer from './authentication/authenticationReducer'
import bannerReducer from './banners/bannerReducer'
import categoryReducer from './category/categoryReducer'
import productReducers from './products/productReducers'

const rootReducers = combineReducers({
    getAuthenticationDetails: authenticationReducer,
    getCategoryDetails: categoryReducer,
    getProductDetails: productReducers,
    getBannerDetails: bannerReducer
})

export default rootReducers