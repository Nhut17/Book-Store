import React, { useEffect } from 'react'
import Slider from "react-animated-slider";
import 'react-animated-slider/build/horizontal.css';
import "normalize.css/normalize.css";
import '../../sass/Home/slider-animation.scss'

const ListBanner = () => {



  const slider = [
    {
      title: 'Bestselling',
      title0: '',
      title1: 'Fiction',
      title2: 'Book',
      description: 'Hơn 120.000 lượt mua và đánh giá',
      button: 'BUY NOW',
      image: 'https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-3.jpg.webp'
    },
    {
      title: 'Happy Chrismas',
      title0: '',
      title1: '',
      title2: '',
      description: 'Đón giáng sinh cùng Vinabook với hàng chục deal hấp dẫn',
      description1: 'Từ ngày 1-12 đến hết ngày 24-12 ',
      button: 'Xem ngay',
      image: 'https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2021/08/slider1-2.jpg.webp'
    },
  ]
  
  const setting = {
    infinite: true,
    autoplay: 2,
  }

 
  return (
    <div className='list-banner'>
    <Slider className='slider-wrapper' infinite={false}>
      {
        slider.map((item,index) => (
          <div className='slider-content'
                key={index}
                style={{background: `url('${item.image}') no-repeat center center`}}>

                <div className="inner">
                <h1>{item.title} <span style={{
                  color: '#F1592B',
                  textDecoration: 'underline'
                }}>{item.title0}</span> 
                  <br />
                    <span style={{
                      color: '#F1592B',
                      textDecoration: 'underline'
                    }}>{item.title1}</span>  {item.title2}
                </h1>
                <p>{item.description}
                    <br />
                    <span style={{
                      color: '#F1592B',
                      fontWeight: 'bold',
                      fontSize: '18px'
                    }}>
                        {item.description1}
                    </span>
                </p>
               
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