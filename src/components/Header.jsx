import React,{useState} from 'react'
import '../sass/Header/header.scss'
import logo from '../assets/images/Home/logo.png'
import { Link } from 'react-router-dom'
import HeaderTop from './Header/HeaderTop'
import HeaderMain from './Header/HeaderMain'
import HeaderNav from './Header/HeaderNav'


const Header = () => {
  
 

  


  return (
    <header>
      
       <HeaderTop />
     

        <HeaderMain />
     
       
       <HeaderNav />

    </header>
  )
}

export default Header
