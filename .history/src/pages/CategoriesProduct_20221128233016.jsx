import React from 'react'

const CategoriesProduct = () => {
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

export default CategoriesProduct
