import axios from "axios"
import { headers, URL } from "../config"
import { GET_CATEGORIES } from '../actionType'
export const getCategory = () => async (dispatch) => {
    let response = await axios.get(`${URL}/categories`, headers);
    dispatch({
        type: GET_CATEGORIES,
        payload: response,
        loader: false
    })
}