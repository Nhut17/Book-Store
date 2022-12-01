import React, { useState,useEffect } from 'react'
import MainBoxProduct from './MainBoxProduct'
import { useDispatch, useSelector } from 'react-redux'
import {  getProducts } from '../../redux/reducer/productSlice'
import { Loading } from '../../HOCs/Loading'

const PageCategoriesRight = ({listProduct}) => {

  
 

  return (
    <div className='page-main-right'>
        <MainBoxProduct list_product={listProduct} />

    </div>
  )
}

export default PageCategoriesRight