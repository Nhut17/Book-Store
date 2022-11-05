import { data } from 'jquery'
import React from 'react'
import ListMainProduct from './ListMainProduct'
import { Link } from 'react-router-dom'
import '../../sass/MainProduct/mainProduct.scss'
const MainBoxProduct = ({ list_product }) => {

  return (
    <div className='main-box-product'>
      <p className="title">Sach Giao Khoa</p>
      <ListMainProduct list_product={list_product} />
      <Link className='see-more'><i className="fa-solid fa-angle-right ic"></i><i className="fa-solid fa-angle-right ic"></i><span > Xem tất cả</span></Link>
    </div>
  )
}

export default MainBoxProduct