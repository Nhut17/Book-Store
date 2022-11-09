import React from 'react'
import { useDispatch } from 'react-redux'
import MainCateProduct from '../components/SubComponents/MainCateProduct'

const ChildrenBook = () => {
    const dispatch = useDispatch()
    const listProduct = useSelector(state => state.product.listProductCate)
    const {id} = useParams()

  return (
    <div className='children-book'>
            <MainCateProduct listProduct={listProduct} />
      
    </div>
  )
}

export default ChildrenBook
