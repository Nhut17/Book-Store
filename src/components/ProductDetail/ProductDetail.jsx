import React from 'react'
import BreadcrumbDetailProduct from './BreadcrumbDetailProduct'
import '../../sass/ProductDetail/productDetail.scss'
import MainProductDetail from './MainProductDetail'
const ProductDetail = () => {
  return (
    <div className='container'>

        <BreadcrumbDetailProduct />

        <MainProductDetail />

    </div>
  )
}

export default ProductDetail