import React, { useContext } from 'react'
import { LoginContext } from '../../context/loginContext'
import logo from '../../assets/images/Home/logo.png'
import { Link } from 'react-router-dom'
import ActiveCart from '../CartShopping/ActiveCart'
import EmptyCart from '../CartShopping/EmptyCart'


const HeaderMain = () => {

  const [showLogin, setShowLogin, setLayoutModal, setShowSignUp] = useContext(LoginContext)

  const handleLogin = () => {
    setShowLogin(true)
    setLayoutModal(true)
  }
  const handleSignUp = () => {
    setShowSignUp(true)
    setLayoutModal(true)
  }

  console.log('click login ')

  return (
    <div className="header-main">
      <div className="container">
        <div className="logo">
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="input-group">
          <i className="fa-solid fa-magnifying-glass ic-search"></i>
          <input type="text" placeholder='Tìm tựa sách tác giả' />
          <button>Tìm sách</button>
        </div>

        <ul className="top-cart">
          <li className='border-cart'>
            <i className="fa-solid fa-cart-shopping cart">
            </i>
            <ActiveCart />

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