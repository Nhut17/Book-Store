import React, { useEffect } from 'react'
import Slider from "react-animated-slider";
import 'react-animated-slider/build/horizontal.css';
const ListBanner = () => {



  const slider = [
    {
      title: 'Bestselling Fiction Book',
      button: '',
      image: 'https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-3.jpg.webp'
    },
    {
      title: '',
      button: '',
      image: 'https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-2.jpg.webp'
    },
  ]


 
  return (
    <div className='list-banner'>
    <Slider className='slider-wrapper' >
        {
          slider.map((item,index) =>{
              <div key={index}
                    className='slider-content'
                  >

                  
              </div>            
          })
        }
        <div className='item-banner'>

        </div>
    </Slider>
      
    </div>
  )
}

export default ListBanner