import axios from "axios"
import { headers, URL } from "../config"
import {GET_PRODUCTS } from '../actionType'
export const getProduct = () => async (dispatch) => {
    let response = await axios.get(`${URL}/products`, headers)
    dispatch({
        type: GET_PRODUCTS,
        payload: response.data,
        loader: false
    })
}
