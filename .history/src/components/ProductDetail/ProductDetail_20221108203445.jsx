import React from 'react'
import BreadcrumbDetailProduct from './BreadcrumbDetailProduct'
import '../../sass/ProductDetail/productDetail.scss'
import MainProductDetail from './MainProductDetail'
import { ProductDetailContext } from '../../context/productDetailContext'
const ProductDetail = () => {
  return (
    <div className='container'>
      

        <BreadcrumbDetailProduct />

        <MainProductDetail />

    </div>
  )
}

export default ProductDetail