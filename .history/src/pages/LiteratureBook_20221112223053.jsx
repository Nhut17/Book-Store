import React, { useEffect } from 'react'
import MainCateProduct from '../components/SubComponents/MainCateProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCate, getProducts } from '../redux/reducer/productSlice';
import { useParams } from 'react-router-dom';

const LiteratureBook = () => {

    const state = useSelector(state => state.product.listProduct)
    const dispatch = useDispatch()
  
  
    const { id } = useParams()
    console.log('')

    useEffect(() => {
        dispatch(getProductCate(id))
    },[])


    return (
        <div className='text-book'>


            <MainCateProduct listProduct={state} />

        </div>
    )
}

export default LiteratureBook