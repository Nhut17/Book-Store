import { data } from 'jquery'
import React from 'react'
import ListMainProduct from './ListMainProduct'
import { Link } from 'react-router-dom'
import '../../sass/MainProduct/mainProduct.scss'
import { useSelector } from 'react-redux'
const MainBoxProduct = ({ list_product }) => {

  const cateName = useSelector(state => state.category.cateById.cateName)
  const dispatch = useDis

  return (
    <div className='main-box-product'>
        <p className="title" >{list_product[0]?.category}</p>
        <ListMainProduct list_product={list_product} />
      <Link className='see-more'><i class="fa-solid fa-angle-right ic"></i><i class="fa-solid fa-angle-right ic"></i><span > Xem tất cả</span></Link>
    </div>
  )
}

export default MainBoxProduct