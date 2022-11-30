import React from 'react'

const ScrollToTop = () => {

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 
        })
    }

  return (
    <div className='scroll-to-top' onClick={handleScroll}>
      <i class="fas fa-angle-up ic"></i>
    </div>
  )
}

export default ScrollToTop
