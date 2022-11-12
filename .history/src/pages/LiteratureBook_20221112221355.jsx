import React, { useEffect } from 'react'
import MainCateProduct from '../components/SubComponents/MainCateProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/reducer/productSlice';

const LiteratureBook = () => {

    const state = useSelector(state => state.product.listProduct)
    const dispatch = useDispatch()
  
  
    useEffect(() => {
  
      dispatch(getProducts())
  
    },[])

    return (
        <div className='text-book'>


            <MainCateProduct listProduct={state} />

        </div>
    )
}

export default LiteratureBook