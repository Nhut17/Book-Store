import React from 'react'
import MainBoxProduct from './MainBoxProduct'
import { list_main_product } from '../data'
import { useDispatch, useSelector } from 'react-redux'

const PageCategoriesRight = () => {

  const listProduct = useSelector(state => state.getApiProduct)
  const dispatch = useDispatch()

  console.log(list)

  return (
    <div className='page-main-right'>
        <MainBoxProduct list_product={list_main_product} />
    </div>
  )
}

export default PageCategoriesRight