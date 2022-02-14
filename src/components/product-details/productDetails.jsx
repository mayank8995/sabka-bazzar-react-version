import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/products/actionCreator';

const ProductDetails = ({id}) => {
    const productList = useSelector((state) => state.getProductDetails.productList);
    const filteredProduct = productList.filter((item, index)=> item.category === id)
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(getProduct())
    }, [dispatch])
    return <div className='product-list'>
        {(id ? filteredProduct : productList).map((item, index) => {
            return <div key={item.id} className='card'>
                <h3 className='category-name'>{item.name}</h3>
                <img width="115" height="115" src={item.imageURL} alt={item.name} />
                <p className='category-description'>{item.description}</p>
                <div className='add-category'><span>MRP Rs. {item.price}</span>&nbsp;<button>Buy Now</button></div>
            </div>
        })}
    </div>
}

export default React.memo(ProductDetails);