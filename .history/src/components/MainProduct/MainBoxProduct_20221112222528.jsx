import { data } from 'jquery'
import React, { useEffect } from 'react'
import ListMainProduct from './ListMainProduct'
import { Link } from 'react-router-dom'
import '../../sass/MainProduct/mainProduct.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryById } from '../../redux/reducer/categorySlice'
const MainBoxProduct = ({ list_product }) => {

  const cateName = useSelector(state => state.category.cateById.cateName)
  const dispatch = useDispatch()
  const { id } = usepa

  useEffect(() => {
    dispatch(getCategoryById())

  },[])

  return (
    <div className='main-box-product'>
        <p className="title" >{list_product[0]?.category}</p>
        <ListMainProduct list_product={list_product} />
      <Link className='see-more'><i class="fa-solid fa-angle-right ic"></i><i class="fa-solid fa-angle-right ic"></i><span > Xem tất cả</span></Link>
    </div>
  )
}

export default MainBoxProduct