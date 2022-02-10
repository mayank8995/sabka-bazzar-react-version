import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getBanner } from '../../redux/banners/actionCreator'
const Banners = (props) => {

    const banners = useSelector((state) => state.getBannerDetails.bannerList)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBanner())
    }, [dispatch])
    return <React.Fragment>
        <ul>
            {banners.map((item, index) => {
                return <li>{item.bannerImageAlt}</li>
            })}
        </ul>
    </React.Fragment>
}

export default Banners;