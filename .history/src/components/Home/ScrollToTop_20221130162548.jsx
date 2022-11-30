import React, { useEffect } from 'react'

const ScrollToTop = () => {

    useEffect(() =>{

        const scrollTo = () => {
          if(window.scrollY > 200)
          {
            window.scrollTo(0, window.scrollY)
          }
        }
    
        document.addEventListener('scroll', scrollTo)
      },[])

  return (
    <div className='scroll-to-top' onClick={handleScroll}>
      <i class="fas fa-angle-up ic"></i>
    </div>
  )
}

export default ScrollToTop
