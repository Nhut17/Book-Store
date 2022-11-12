import React, { useEffect } from 'react'
import '../sass/Header/header.scss'
import HeaderTop from './Header/HeaderTop'
import HeaderMain from './Header/HeaderMain'
import HeaderNav from './Header/HeaderNav'


const Header = () => {
  
 
  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 190)
      {
        
      }
    }

    document.addEventListener('scroll', onScroll)

  },[])
  


  return (
    <header>
      
       <HeaderTop />
     

        <HeaderMain />
     
       
       <HeaderNav />

    </header>
  )
}

export default Header
