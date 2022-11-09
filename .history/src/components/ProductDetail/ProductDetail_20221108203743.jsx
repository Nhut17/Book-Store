import React, { useEffect } from 'react'
import BreadcrumbDetailProduct from './BreadcrumbDetailProduct'
import '../../sass/ProductDetail/productDetail.scss'
import MainProductDetail from './MainProductDetail'
import { ProductDetailContext } from '../../context/productDetailContext'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../../redux/reducer/productSlice'
import { useParams } from 'react-router-dom'
const ProductDetail = () => {

  const param = useParams()
  const dispatch = useDispatch()
  const state = useSelector(state => state.product.ProductDetail)

  useEffect(() => {
    console.log(param)
  },[])

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