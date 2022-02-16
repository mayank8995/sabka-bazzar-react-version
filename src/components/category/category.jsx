import React from 'react';
import { Link} from 'react-router-dom';
import './category.css'
const Category = ({ categoryData }) => {
    return <React.Fragment>
        {categoryData && categoryData?.data?.map((item, index) => {
            if (index % 2 === 0) {
                return <div key={item.key} id={item.id} className='category'>
                    <div className='i'>
                        <img width="300" height="185" src={item.imageUrl} alt={item.name} />
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
                        <img width="300" height="185" src={item.imageUrl} alt={item.name} />
                    </div>
                </div>
            }
        })}
    </React.Fragment>
}
export default React.memo(Category);