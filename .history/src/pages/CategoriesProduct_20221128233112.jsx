import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MainCateProduct from '../components/SubComponents/MainCateProduct'
import { getProductCate } from '../redux/reducer/productSlice'

const CategoriesProduct = () => {

    const dispatch = useDispatch()
    const listProduct = useSelector(state => state.product.listProductCate)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getProductCate(id))
    },[])

  return (
    <div className='cate-product'>
            <MainCateProduct listProduct={listProduct} />
      
    </div>
  )
 
}

export default CategoriesProduct
