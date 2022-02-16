import { GET_BANNERS } from '../actionType'
import axios from "axios"
import { headers } from "../config"
import { URL } from '../config'
export const getBanner = () => async (dispatch) => {
    let response = await axios.get(`${URL}/banner.get.json`, headers)
    dispatch({
        type: GET_BANNERS,
        payload: response.data,
        loader: false
    })
}