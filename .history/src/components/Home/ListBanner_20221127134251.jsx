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
      description: 'Hơn 120.000 lượt mua và đánh giá',
      button: 'BUY NOW',
      image: 'https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-3.jpg.webp'
    },
    {
      title: '',
      button: '',
      image: 'https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-2.jpg.webp'
    },
  ]
  
  const setting = {
    autoplay: 1,
    infinite: true,
  }

 
  return (
    <div className='list-banner'>
    <Slider className='slider-wrapper' {...setting}>
      {
        slider.map((item,index) => (
          <div className='slider-content'
                key={index}
                style={{background: `url('${item.image}') no-repeat center center`}}>

                <div className="inner">
                <h1>{item.title}
                  <br />
                    <span style={{
                      color: '#F1592B',
                      textDecoration: 'underline'
                    }}>{item.title1}</span>  {item.title2}
                </h1>
                <p>{item.description}</p>
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