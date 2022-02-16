import { ADD_TO_CART, REMOVE_ITEM_FROM_CART } from "../actionType"

export const addItemToCart = (data) => (dispatch, getState) => {
    const cartData = getState().getCartData.items;
    let cartItems = [];
    let flag = false;
    if(cartData.length === 0){
        cartItems.push(data)
    }else{
        for(let i=0;i<cartData.length;i++){
            if(data.id === cartData[i].id){
                cartData[i].count++;
                flag = true;
            }
        }
        if(!flag){
            cartItems.push(data)
        }
    }    
    return dispatch({
        type: ADD_TO_CART,
        payload: [...cartData,...cartItems],
        loader: false
    })
}

export const removeItemFromCart = (data) => (dispatch, getState) =>{
    const cartData = getState().getCartData.items;
    let index;
    let flag = true;
    for(let i=0;i<cartData.length;i++){
        if(data.id === cartData[i].id){
            if(cartData[i].count > 1){
                cartData[i].count--;
            }else{
                index = i;
                flag=false;
            }
        }
    }
    if(!flag){
        cartData.splice(index,1)
    }
    return dispatch({
        type: REMOVE_ITEM_FROM_CART,
        payload: [...cartData],
        loader: false
    })
}

