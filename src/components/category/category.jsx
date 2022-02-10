import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCategory } from '../../redux/category/actionCreator'
const Category = (props) => {
    const categoryData = useSelector((state) => state.getCategoryDetails.categoryList);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])

    return <React.Fragment>
        <ul>
            {categoryData?.data?.map((item, index) => {
                return <li>{item.name}</li>
            })}
        </ul>
    </React.Fragment>
}
export default Category;