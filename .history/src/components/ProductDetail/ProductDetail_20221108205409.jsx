import React, { useEffect } from 'react'
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
  const state = useSelector(state => state.product.productDetail)
  const [ex,setEx] = use

  useEffect(() => {
    dispatch(getProductDetail(id))
    console.log('product detail: '+ JSON.stringify(state))

  },[])

  const values = {
    state,
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