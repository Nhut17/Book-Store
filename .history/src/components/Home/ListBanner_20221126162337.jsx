import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ListBanner = () => {

  const ButtonNext = (props) => {

    const  {className, style, onClick} = props

    console.log(props)

    return <span className={className} onClick={onClick}
                  style={{...style,
                        position: 'absolute',
                        display: 'flex',
                        width:100,
                        height:100,
                        borderRadius:
                        borderRadius: '5px',
                        backgroundColor: 'rgba(216,216,216,.7)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'translate(-12px,-20px)',
                        opacity:0.7
                        }} ><i class="fa-solid fa-angle-right" style={{color: 'black',
                                                                        position: 'absolute',
                                                                        fontWeight: 'bold',
                                                                        fontSize:30}} ></i></span>
}
const ButtonPrev = (props) => {

    const {className, style, onClick} = props

    return <span className={className} onClick={onClick}
    style={{...style,
          position: 'absolute',
          display: 'flex',
          width:50,
          height:80,
          borderRadius: '5px',
          backgroundColor: 'rgba(216,216,216,.7)',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translate(5px,-20px)',
          zIndex: 100,
          opacity:0.7
          }} ><i class="fa-solid fa-angle-left" style={{color: 'black',
                                                        position: 'absolute',
                                                        fontWeight: 'bold',                 
                                                        fontSize:30}} ></i></span>
}



  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ButtonPrev />,
    nextArrow: <ButtonNext />
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