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
                <div className='image'
                    style={{
                        backgroundImage: 'url(' + 'https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-3.jpg.webp' alt='' '
                    }}>
                
                </div>
                </li>

        </ul>
    </div>
  )
}

export default ListBanner