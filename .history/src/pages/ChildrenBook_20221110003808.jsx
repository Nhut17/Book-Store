import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MainCateProduct from '../components/SubComponents/MainCateProduct'

const ChildrenBook = () => {

    const dispatch = useDispatch()
    const listProduct = useSelector(state => state.product.listProductCate)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getProductCate(id))
    },[])

  return (
    <div className='children-book'>
            <MainCateProduct listProduct={listProduct} />
      
    </div>
  )
}

export default ChildrenBook
