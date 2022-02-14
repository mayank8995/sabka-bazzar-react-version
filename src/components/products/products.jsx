import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './products.css'
const ProductDetails = React.lazy(() => import('../product-details/productDetails'))
const Products = (props) => {
    const { id } = useParams();
    const { data } = useSelector((state) => state.getCategoryDetails.categoryList);
    const history = useHistory()
    const filterCategory = (e) => {
        if (e.target.innerHTML === 'Show All') {
            history.push('/products');
        } else {
            history.push(`/products/${e.target.id}`)
        }
    }
    return <React.Fragment>
        <div className='products'>
            <aside className='category-list'>
                <ul onClick={filterCategory}>
                    <li className={!id?'selected':''}>Show All</li>
                    {data?.map((item, index) => <li className={id===item.id?'selected':''} id={item.id} key={item.key}>{item.name}</li>)}
                </ul>
            </aside>
            {/* <aside className='category-dropdown'>
            </aside> */}
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader">...Loader</div>
                </div>
            }>
                <ProductDetails id={id}/>
            </Suspense>
        </div>
    </React.Fragment>


}

export default Products;