import React, { useEffect } from 'react'
import '../sass/Header/header.scss'
import HeaderTop from './Header/HeaderTop'
import HeaderMain from './Header/HeaderMain'
import HeaderNav from './Header/HeaderNav'


const Header = () => {
  
 
  useEffect(() => {
    if(window.scrollY)
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
