import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoader from '../LazyLoadImage/LazyLoader';
import './category.css'
const Category = ({ categoryData }) => {
    return <React.Fragment>
        {categoryData && categoryData?.data?.map((item, index) => {
            if (index % 2 === 0) {
                return <div key={item.key} id={item.id} className='category'>
                    <div className='i'>
                        <LazyLoader src={item.imageUrl} threshold={[0, 0.25,0.5, 1]} alt={item.name} width="300" height="185" />
                    </div>
                    <div className='description'>
                        <p>{item.description}</p>
                        <Link className='navigate-btn' to={`/products/${item.id}`}>
                            {item.name}
                        </Link>
                    </div>
                </div>
            } else {
                return <div key={item.key} id={item.id} className='category'>
                    <div className='description'>
                        <p>{item.description}</p>
                        <a className='navigate-btn' href={`/products/${item.id}`}>
                            {item.name}
                        </a>
                    </div>
                    <div className='i'>
                        <LazyLoader src={item.imageUrl} threshold={[0, 0.5, 1]} alt={item.name} width="300" height="185" />
                    </div>
                </div>
            }
        })}
    </React.Fragment>
}
export default React.memo(Category);