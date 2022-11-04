import React, { useState,useEffect } from 'react'
import MainBoxProduct from './MainBoxProduct'
import { list_main_product } from '../data'

const PageCategoriesRight = () => {

  const [listProduct,setListProduct] = useState([])



  


  return (
    <div className='page-main-right'>
        <MainBoxProduct list_product={listProduct} />
    </div>
  )
}

export default PageCategoriesRight