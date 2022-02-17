import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/cart/actionCreator';
import { getProduct } from '../../redux/products/actionCreator';
import LazyLoader from '../LazyLoadImage/LazyLoader';

const ProductDetails = ({ id }) => {
    
    const productList = useSelector((state) => state.getProductDetails.productList);
    const filteredProduct = productList.filter((item) => item.category === id)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    const add = (data) => {
        let orderObject = {
            name: data.name,
            price: data.price,
            id: data.id,
            image: data.imageURL,
            count: 1,
        }
        dispatch(addItemToCart(orderObject))
    }
    return <div className='product-list'>
        {(id ? filteredProduct : productList).map((item, index) => {
            return <div key={item.id} className='card'>
                <h3 className='category-name'>{item.name}</h3>
                <LazyLoader src={item.imageURL} threshold={[0, 0.5, 1]} alt={item.name} width="115" height="115"/>
                <p className='category-description'>{item.description}</p>
                <div className='add-category'><span>MRP Rs. {item.price}</span>&nbsp;<button onClick={add.bind(null,item)}>Buy Now</button></div>
            </div>
        })}
    </div>
}

export default React.memo(ProductDetails);