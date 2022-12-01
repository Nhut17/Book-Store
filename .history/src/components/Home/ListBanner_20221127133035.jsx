import React, { useEffect } from 'react'
import Slider from "react-animated-slider";
import 'react-animated-slider/build/horizontal.css';
import "normalize.css/normalize.css";
import '../../sass/Home/slider-animation.scss'

const ListBanner = () => {



  const slider = [
    {
      title: 'Bestselling',
      title1: 'Fiction',
      title2: 'Book',
      button: 'BUY NOW',
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
    <Slider className='slider-wrapper'>
      {
        slider.map((item,index) => (
          <div className='slider-content'
                key={index}
                style={{background: `url('${item.image}') no-repeat center center`}}>

                <div className="inner">
                <h1>{item.title}
                  <br />
                    <span>{}</span>  {item.title2}
                </h1>
               
                <button>{item.button}</button>
              </div>

          </div>
        ))
      }
    </Slider>
      
    </div>
  )
}

export default ListBanner