import React, { useEffect } from 'react'
import Slider from "react-animated-slider";
import 'react-animated-slider/build/horizontal.css';
import "normalize.css/normalize.css";

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
    <Slider>
      {}
    </Slider>
      
    </div>
  )
}

export default ListBanner