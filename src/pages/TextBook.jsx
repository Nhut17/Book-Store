import React, { useEffect } from 'react'
import MainCateProduct from '../components/SubComponents/MainCateProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCate, getProducts } from '../redux/reducer/productSlice';
import { useParams } from 'react-router-dom';

const TextBook = () => {

    const listProduct = useSelector(state => state.product.listProductCate)
    const dispatch = useDispatch()
  
  
    const {id} = useParams()

    useEffect(() => {
        dispatch(getProductCate(id))
    },[])


    return (
        <div className='text-book'>


            <MainCateProduct listProduct={listProduct} />

        </div>
    )
}

export default TextBook