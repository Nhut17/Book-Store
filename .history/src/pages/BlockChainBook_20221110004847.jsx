import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const BlockChainBook = () => {

    const dispatch = useDispatch()
    const listProduct = useSelector(state => state.product.listProductCate)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getProductCate(id))
        console.log(listProduct)
    },[])


  return (
    <div className='block-chain'>
            <MainCateProduct listProduct={listProduct} />
        
    </div>
  )
}

export default BlockChainBook
