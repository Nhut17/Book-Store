import React, { useState,useEffect } from 'react'
import MainBoxProduct from './MainBoxProduct'
import { list_main_product } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import {  getProducts } from '../../redux/productSlice'

const PageCategoriesRight = () => {

  const state = useSelector(state => state.product.listProduct)
  const dispatch = useDispatch()


  useEffect(() => {

    dispatch(getProducts())

  },[])
 

  return (
    <div className='page-main-right'>
        <MainBoxProduct list_product={state} />

    </div>
  )
}

export default PageCategoriesRight