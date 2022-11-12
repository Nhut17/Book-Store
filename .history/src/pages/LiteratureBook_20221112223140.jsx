import React, { useEffect } from 'react'
import MainCateProduct from '../components/SubComponents/MainCateProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCate, getProducts } from '../redux/reducer/productSlice';
import { useParams } from 'react-router-dom';

const LiteratureBook = () => {

    const listProduct = useSelector(state => state.product.listProductCate)
    const dispatch = useDispatch()
  
  
    const { id } = useParams()
    console.log('id: ' + id)

    useEffect(() => {
        dispatch(getProductCate(id))
    },[])


    return (
        <div className='text-book'>


            <MainCateProduct listProduct={list} />

        </div>
    )
}

export default LiteratureBook