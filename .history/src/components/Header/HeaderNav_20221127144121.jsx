import React from 'react'
import CategoriesProduct from '../Home/CategoriesProduct'

const HeaderNav = () => {



  return (
    <div className="header-nav">
      <div className="container">
        <nav className='list-category'>
          <ul>
            <li>
              <i className="fa-solid fa-bars ic-nav"></i>
            </li>
            <li >
              <span>Danh Mục Sách</span>
            </li>
            <li>
              <i className="fa-solid fa-angle-down ic-angle-down"></i>
            </li>
          </ul>

          <div className='drop-down'>
          </div>

        </nav>

        <div className="info-contact">
          <div className="hotline">
            <i className="fa-solid fa-phone ic"></i>
            <span>Hotline: 1900 6401</span>
          </div>

          <div className="tech-support">

            <i className="fa-solid fa-comments ic"></i>
            <span>Hỗ trợ trực tuyến</span>

          </div>

        </div>

      </div>
    </div>
  )
}

export default HeaderNav