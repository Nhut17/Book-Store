import React from 'react'

const ScrollToTop = () => {

    useEffect(() =>{

        const scrollTo = () => {
          if(window.scrollY > 200)
          {
            setVisible(true)
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
