import React from 'react'
import banner_1 from '../../assets/images/Home/banner_1.jpg'
import banner_2 from '../../assets/images/Home/banner_2.jpg'
import banner_3 from '../../assets/images/Home/banner_3.jpg'
import banner_4 from '../../assets/images/Home/banner_4.jpg'
import banner_5 from '../../assets/images/Home/banner_5.jpg'
import banner_6 from '../../assets/images/Home/banner_6.jpg'

const ListBanner = () => {
  return (
    <div className='list-banner'>
        <ul>
            <li>
                <div className="banner-top">

               <div className="big-banner"><img src={banner_1} alt="" /></div> 
                <div className="small-banner">
                    <img src={banner_2} alt="" />
                    <img src={banner_3} alt="" />
                </div>
                </div>
            </li>

            <li>
                <div className="banner-bottom">

                <img src={banner_4} alt="" />
                <img src={banner_5} alt="" />
                <img src={banner_6} alt="" />
                </div>
            </li>

        </ul>
    </div>
  )
}

export default ListBanner