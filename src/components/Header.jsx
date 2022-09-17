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
          <i class="fa-solid fa-magnifying-glass ic-search"></i>
            <input type="text" placeholder='Tìm tựa sách tác giả' />
            <button>Tìm sách</button>
          </div>

          <ul className="top-card">
            <li className='border-cart'>
            <i class="fa-solid fa-cart-shopping cart"></i>
            </li>

            <li className='sign'>
              <Link>
                <span className='sign-in'>Đăng nhập</span>
              </Link>
              <Link>
                <span className='sign-up'>Đăng ký</span>
              </Link>
            </li>

          </ul>

        </div>
      </div>

      <div className="header-nav">
        <div className="container">
        <nav>
          <ul>
            <li>
            <i class="fa-solid fa-bars ic-nav"></i>
            </li>
            <li>
              <span>Danh Mục Sách</span>
            </li>
            <li>
              <i class="fa-solid fa-angle-down ic-angle-down"></i>
            </li>
          </ul>
        </nav>

        <div className="info-contact">
          <div className="hotline">
          <i class="fa-solid fa-phone ic"></i>
            <span>Hotline: 1900 6401</span>
          </div>

          <div className="tech-support">

            <i class="fa-solid fa-comments ic"></i>
            <span>Hỗ trợ trực tuyến</span>

          </div>

        </div>

        </div>
      </div>


    </header>
  )
}

export default Header
