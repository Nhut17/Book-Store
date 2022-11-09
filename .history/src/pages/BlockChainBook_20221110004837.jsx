import React from 'react'

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
