import React from 'react'
import BreadcrumbDetailProduct from './BreadcrumbDetailProduct'
import '../../sass/ProductDetail/productDetail.scss'
import MainProductDetail from './MainProductDetail'
import { ProductDetailContext } from '../../context/productDetailContext'
import { useDispatch } from 'react-redux'
const ProductDetail = () => {

  const dispatch = useDispatch()
  const state = useSelec

  const values = {

  }

  return (
    <div className='container'>
      <ProductDetailContext.Provider value={values}>

        <BreadcrumbDetailProduct />

        <MainProductDetail />
      
      </ProductDetailContext.Provider>

    </div>
  )
}

export default ProductDetail