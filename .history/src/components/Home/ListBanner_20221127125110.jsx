import React, { useEffect } from 'react'
import Slider from "react-animated-slider";

const ListBanner = () => {

  const ButtonNext = (props) => {

    const  {className, style, onClick} = props


    return <span className={className} onClick={onClick}
                  style={{...style,
                        position: 'absolute',
                        display: 'flex',
                        marginRight: '50px',
                        width:50,
                        height:50,
                        borderRadius: '50%',
                        border: '1px solid black',
                        backgroundColor: 'transparent',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'translate(-12px,-20px)',
                        transition: 'all 0.2s'
                        }} ><i class="fa-solid fa-angle-right ic-btn-next" style={{color: 'black',
                                                                        position: 'absolute',
                                                                        fontWeight: 'bold',
                                                                        fontSize:30}} ></i></span>
}
const ButtonPrev = (props) => {

    const {className, style, onClick} = props

    return <span className={className} onClick={onClick}
    style={{...style,
          position: 'absolute',
          marginLeft: '50px',
          display: 'flex',
          width:50,
          height:50,
          borderRadius: '50%',
          border: '1px solid black',
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translate(5px,-20px)',
          zIndex: 100,
          transition: 'all 0.2s'
          }} ><i class="fa-solid fa-angle-left ic-btn-prev" style={{color: 'black',
                                                        position: 'absolute',
                                                        fontWeight: 'bold',                 
                                                        fontSize:30}} ></i></span>
}

  const slider = [
    {
      title: '',
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
                    className='slider-content]'
                    style={{
                      background: `url`
                    }}>
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