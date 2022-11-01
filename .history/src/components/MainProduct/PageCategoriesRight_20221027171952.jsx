import React from 'react'
import MainBoxProduct from './MainBoxProduct'
import { list_main_product } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { getAPI } from '../../redux/apiSlice'

const PageCategoriesRight = () => {

  const state = useSelector(state => state.getApiProduct)
  const dispatch = useDispatch()

 

  console.log('get api: ' + state.listProduct )

  return (
    <div className='page-main-right'>
        <MainBoxProduct list_product={list_main_product} />

        buton
    </div>
  )
}

export default PageCategoriesRight