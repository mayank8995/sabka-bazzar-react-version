import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBanner } from '../../redux/banners/actionCreator';
import { getCategory } from '../../redux/category/actionCreator';
const Carousal = React.lazy(()=>import('../carousal/carousal'))
const Category = React.lazy(()=>import('../category/category'))
const Home = (props) => {
    const banner = useSelector((state) => state.getBannerDetails.bannerList)
    const categoryData = useSelector((state) => state.getCategoryDetails.categoryList);
    const dispatchBanner = useDispatch()
    const dispatchCategory = useDispatch()
    useEffect(() => {
        dispatchBanner(getBanner())
        dispatchCategory(getCategory())
    }, [dispatchBanner, dispatchCategory])
    return <Suspense fallback={<div className="loader-container">
    <div className="loader">...Loader</div>
</div>}>
        <main>
        <section>
            <Carousal banner={banner} />
        </section>
        <section>
            <Category categoryData={categoryData} />
        </section>
    </main>
    </Suspense>
}
export default Home;