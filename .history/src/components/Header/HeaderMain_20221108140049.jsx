import React, { useContext } from 'react'
import { LoginContext } from '../../context/loginContext'
import logo from '../../assets/images/Home/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import CartShopping from '../CartShopping/CartShopping'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCallback,useRef } from 'react'
import { useSelector } from 'react-redux'


const HeaderMain = () => {

  const [showCart,setShowCart] = useState(false)

  const cartRef = useRef()
  const icRef = useRef()

  const [showLogin, setShowLogin, setLayoutModal, setShowSignUp] = useContext(LoginContext)

  const state = useSelector(state => state.user)
  const navigate = useNavigate()
  const his

  const handleLogin = useCallback((e) => {
    setShowLogin(true)
    setLayoutModal(true)
  })

 const handleLogout = () => {
   const token = localStorage.getItem(`persist:root`)
  console.log('persist: ' + token)
  localStorage.removeItem('persist:root')
  navigate(0)
  
  
 }

  
  const handleSignUp = () => {
    setShowSignUp(true)
    setLayoutModal(true)
  }

  useEffect(() => {
    const handleMouseDown = (e) => {
      if(!cartRef.current?.contains(e.target) && !icRef.current.contains(e.target))
      {
        setShowCart(false)
      }
    }

    document.addEventListener('mousedown',handleMouseDown)

    return () => {
      document.removeEventListener('mousedown',handleMouseDown)
    }
  },[])

  const handleShowCart = (e) => {
    setShowCart(!showCart)

  }

  


  return (
    <div className="header-main" >
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
            ref={icRef}
            onClick={handleShowCart}>
            </i>
            {
              showCart &&
            <CartShopping cartRef={cartRef} />
            }
           
          </li>

          <li className='sign'>
            {
              state.completed ? (
                <Link to='/profile'>
                  <span className='sign-in' >{state.user.name}</span>
                </Link>
              ) : (
                <span className='sign-in' onClick={handleLogin} >Đăng nhập</span>
              )
            }
            {
              state.completed ? (
                <span className='sign-up' onClick={handleLogout} >Đăng xuất</span>

              ) : (
                <span className='sign-up' onClick={handleSignUp}>Đăng ký</span>
              )
            }

          </li>

        </ul>

      </div>
    </div>

  )
}

export default HeaderMain