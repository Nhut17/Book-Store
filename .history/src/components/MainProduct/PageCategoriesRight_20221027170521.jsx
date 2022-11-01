import React from 'react'
import MainBoxProduct from './MainBoxProduct'
import { list_main_product } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const PageCategoriesRight = () => {

  const getApiProduct = useSelector(state => state.getApiProduct)
  const dispatch = useDispatch()

  const [listProduct,setListProduct] = useState(getApiProduct)

  return (
    <div className='page-main-right'>
        <MainBoxProduct list_product={list_main_product} />
    </div>
  )
}

export default PageCategoriesRight