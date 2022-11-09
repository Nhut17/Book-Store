import React from 'react'
import ProductMainInfo from './ProductMainInfo'
import ProductRecommand from './ProductRecommand'
import ContentProduct from './ContentProduct'
import { list_product } from '../data'

const MainProductDetail = ({data}) => {
  return (
    <div className='main-product-detail'>
      {
        list_product.slice(0,1).map(data => (
          <ProductMainInfo data={data} />        
        ))
      }

     
          <ProductRecommand  />

        
      {
        list_product.slice(0,1).map(data => (
          <ContentProduct data={data} />
        ))
      }


    </div>
  )
}

export default MainProductDetail
