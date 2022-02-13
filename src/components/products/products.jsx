import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../redux/products/actionCreator'
import Category from '../category/category';
import './products.css'
const Products = (props) => {
    const { id } = useParams();
    const productList = useSelector((state) => state.getProductDetails.productList);
    const { data } = useSelector((state) => state.getCategoryDetails.categoryList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    return <React.Fragment>
        <div className='products'>
            <aside className='category-list'>
                <ul>
                    <li>Show All</li>
                    {data?.map((item, index) => <li key={item.key}>{item.name}</li>)}
                </ul>
            </aside>
            {/* <aside className='category-dropdown'>
            </aside> */}
            <div className='product-list'>
                    {productList.map((item, index) => {
                        return <div key={item.id} className='card'>
                            <h3 className='category-name'>{item.name}</h3>
                            <img width="115" height="115" src={item.imageURL} alt={item.name} />
                            <p className='category-description'>{item.description}</p>
                            <div className='add-category'><span>MRP Rs. {item.price}</span><button>Buy Now</button></div>
                        </div>
                    })}
            </div>
        </div>
    </React.Fragment>


}

export default Products;