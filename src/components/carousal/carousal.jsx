import React, { useState } from 'react';
import { useEffect } from 'react';
import './carousal.css';
const Carousal = ({ banner }) => {
    const [initialData, setInitialData] = useState(banner);
    const [current, setCurrentData] = useState(0);
    const [dataToShow, setDataToShow] = useState(banner.slice(current, current + 1));
    useEffect(() => {
        setDataToShow(banner.slice(current, current + 1))
        setInitialData(banner)
    }, [banner, current])
    const next = (e) => {
        current === initialData.length - 1 ? setCurrentData(0) : setCurrentData(current => current + 1)
    }
    const prev = (e) => {
        current === 0 ? setCurrentData(initialData.length - 1) : setCurrentData(current => current - 1)
    }
    const carousal = dataToShow && dataToShow.map((item) => {
        return <div key={item.id}><img src={item.bannerImageUrl} alt={item.bannerImageAlt} key={item.id} /></div>
    })
    return <div className='carousal'>
        {carousal}
        <button className="btn-left" onClick={prev}>Previous</button>
        <button className="btn-right" onClick={next}>Next</button>
    </div>
}
export default React.memo(Carousal)