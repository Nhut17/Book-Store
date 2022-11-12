import React, { useEffect } from 'react'
import '../sass/BestSelling/bestSelling.scss';
import MainCateProduct from '../components/SubComponents/MainCateProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/reducer/productSlice';

const TextBook = () => {

    const state = useSelector(state => state.product.listProduct)
    const dispatch = useDispatch()
  
  
    useEffect(() => {
  
      dispatch(getProducts())
  
    },[])

    return (
        <div className=''>


            <MainCateProduct listProduct={state} />

        </div>
    )
}

export default TextBook