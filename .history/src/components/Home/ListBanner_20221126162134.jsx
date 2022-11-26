import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ListBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='list-banner'>
    <Slider {...settings} >
        <div className='item-banner'>

        
        <img src='https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-3.jpg.webp' alt='banner_1' />
        </div>
        <div className='item-banner'>


        <img src='https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-3.jpg.webp' alt='banner_1' />
        </div>
    </Slider>
      
    </div>
  )
}

export default ListBanner