import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MainCateProduct from '../components/SubComponents/MainCateProduct';

const ForeignLiterature = () => {

    const dispatch = useDispatch()
    const listProduct = useSelector(state => state.product)
    const {id} = useParams()

    useEffect(() => {
        dispatch()
    },[])

    return (
        <div className='foreign-literature'>
            <MainCateProduct />

        </div>
    )
}

export default ForeignLiterature