import React, { useEffect, useState } from 'react'
import '../sass/Header/header.scss'
import HeaderTop from './Header/HeaderTop'
import HeaderMain from './Header/HeaderMain'
import HeaderNav from './Header/HeaderNav'


const Header = () => {
  
  const [fixed,setFixed] = useState(false)
 
  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 190)
      {
        setFixed(true)
      }else{
        setFixed(false)
      }
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener
    }

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
