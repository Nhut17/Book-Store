import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MainCateProduct from '../components/SubComponents/MainCateProduct';

const ForeignLiterature = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.product)

    return (
        <div className='foreign-literature'>
            <MainCateProduct />

        </div>
    )
}

export default ForeignLiterature