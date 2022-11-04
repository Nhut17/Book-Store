import React from 'react'
import MainBoxProduct from './MainBoxProduct'
import { list_main_product } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAPI } from '../../redux/apiSlice'

const PageCategoriesRight = () => {

  const state = useSelector(state => state.getApiProduct)
  const dispatch = useDispatch()


  useEffect(() => {

    dispatch()

  },[])
 
  console.log(state)

  return (
    <div className='page-main-right'>
        <MainBoxProduct list_product={list_main_product} />

        <button onClick={() => dispatch(getAPI())}>Click</button>
    </div>
  )
}

export default PageCategoriesRight