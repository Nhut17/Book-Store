import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ListBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='list-banner'>
    <Slider
        <ul>
           
            <li>
                <div className='image'>
                    <img src='https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-3.jpg.webp' alt='banner_1' />
                </div>
                </li>

        </ul>
    </div>
  )
}

export default ListBanner