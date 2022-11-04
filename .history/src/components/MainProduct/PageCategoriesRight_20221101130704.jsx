import React from 'react'
import MainBoxProduct from './MainBoxProduct'
import { list_main_product } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {  getProducts } from '../../redux/apiSlice'

const PageCategoriesRight = () => {

  const state = useSelector(state => state.getApiProduct.listProduct)
  const dispatch = useDispatch()


  useEffect(() => {

    dispatch(getProducts())

  },[])
 
  console.log('listProduct: ' + state.listProduct)

  return (
    <div className='page-main-right'>
        <MainBoxProduct list_product={list_main_product} />

    </div>
  )
}

export default PageCategoriesRight