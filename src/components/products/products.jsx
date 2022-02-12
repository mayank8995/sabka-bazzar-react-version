import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../redux/products/actionCreator'
const Products = (props) => {
    const {id} = useParams();
    const productList = useSelector((state) => state.getProductDetails.productList);
    const categoryList = useSelector((state) => state.getCategoryDetails.productList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    return <React.Fragment>
        <div className='products'>
        <div className='category'>

        </div>
        <div className='product-list'>
            <ul>
                {productList.map((item, index) => {
                    return <li>{item.name}</li>
                })}
            </ul>
        </div>
        </div>
    </React.Fragment>


}

export default Products;