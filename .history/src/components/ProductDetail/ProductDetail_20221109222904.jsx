import React, { useEffect, useState } from 'react'
import BreadcrumbDetailProduct from './BreadcrumbDetailProduct'
import '../../sass/ProductDetail/productDetail.scss'
import MainProductDetail from './MainProductDetail'
import { ProductDetailContext } from '../../context/productDetailContext'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../../redux/reducer/productSlice'
import { useParams } from 'react-router-dom'
const ProductDetail = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(state => state.product.productDetail)

  useEffect(() => {
    dispatch(getProductDetail(id))

  },[])

  

  return (
    <div className='container'>

        <BreadcrumbDetailProduct />

        <MainProductDetail data={state} />
      

    </div>
  )
}

export default ProductDetail