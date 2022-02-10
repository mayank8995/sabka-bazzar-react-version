import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getProduct } from '../../redux/products/actionCreator'
const Products = (props) => {

    const productList = useSelector((state) => state.getProductDetails.productList);
    console.log(">>>>", productList)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    return <React.Fragment>
        <ul>
            {productList.map((item, index) => {
                return <li>{item.name}</li>
            })}
        </ul>
    </React.Fragment>


}

export default Products;