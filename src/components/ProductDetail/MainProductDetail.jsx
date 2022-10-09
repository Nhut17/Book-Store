import React from 'react'
import ProductMainInfo from './ProductMainInfo'

import { list_product } from '../data'

const MainProductDetail = () => {
  return (
    <div className='main-product-detail'>
      {
        list_product.slice(0,1).map(data => (
          <ProductMainInfo data={data} />        
          
        ))
      }
    </div>
  )
}

export default MainProductDetail
