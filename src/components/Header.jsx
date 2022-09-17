import React from 'react'
import '../sass/Header/header.scss'
import logo from '../assets/images/Home/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
       
      <div className="header-top">
        <div className="container">
            <ul>
              <li className='truck'>
                <i class="fa-solid fa-truck icon"></i>
                <span>Miễn phí giao hàng</span>
              </li>

              <li >
                <i class="fa-solid fa-book"></i>
                <span>80.000 tựa sách</span>
              </li>

            </ul>
        </div>
      </div>
     
      <div className="header-main">
        <div className="container">
          <div className="logo">
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="input-group">
            <i class="fa-light fa-magnifying-glass"></i>
            <input type="text" placeholder='Tìm tựa sách tác giả' />
            <button>Tìm sách</button>
          </div>

          <ul className="top-card">
            <li>
            <i class="fa-light fa-cart-plus"></i>
            </li>

            <li>
              <Link>
                <span>Đăng nhập</span>
              </Link>
              <Link>
                <span className='sign-up'>Đăng ký</span>
              </Link>
            </li>

          </ul>

        </div>
      </div>


    </header>
  )
}

export default Header
