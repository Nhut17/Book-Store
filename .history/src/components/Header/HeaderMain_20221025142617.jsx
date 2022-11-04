import React, { useContext } from 'react'
import { LoginContext } from '../../context/loginContext'
import logo from '../../assets/images/Home/logo.png'
import { Link } from 'react-router-dom'
import CartShopping from '../CartShopping/CartShopping'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCallback, useRef } from 'react'


const HeaderMain = () => {

  const [showCart,setShowCart] = useState(false)



  const [showLogin, setShowLogin, setLayoutModal, setShowSignUp] = useContext(LoginContext)

  const handleLogin = useCallback((e) => {
    setShowLogin(true)
    setLayoutModal(true)
  })
  const handleSignUp = () => {
    setShowSignUp(true)
    setLayoutModal(true)
  }

  useEffect(() => {
    const handleMouseDown = (e) => {
     
    }

    document.addEventListener('mousedown',handleMouseDown)

    return () => {
      document.removeEventListener('mousedown',handleMouseDown)
    }
  },[])

  const handleShowCart = (e) => {
    // console.log(e.target.id)
    setShowCart(!showCart)

  }

  
 
 


  return (
    <div className="header-main">
      <div className="container">
        <div className="logo">
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="input-group">
          <i class="fa-solid fa-magnifying-glass ic-search"></i>
          <input type="text" placeholder='Tìm tựa sách tác giả' />
          <button>Tìm sách</button>
        </div>

        <ul className="top-cart">
          <li className='border-cart'>
            <i class="fa-solid fa-cart-shopping cart" 
            id='cart'
            onClick={handleShowCart}>
            </i>
            {
              showCart &&
            <CartShopping />
            }
           
          </li>

          <li className='sign'>
            <span className='sign-in' onClick={handleLogin} >Đăng nhập</span>
            <span className='sign-up' onClick={handleSignUp}>Đăng ký</span>

          </li>

        </ul>

      </div>
    </div>

  )
}

export default HeaderMain