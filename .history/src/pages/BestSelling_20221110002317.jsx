import React, { useEffect } from 'react'
import '../sass/BestSelling/bestSelling.scss';
import MainCateProduct from '../components/SubComponents/MainCateProduct';
import { useSelector } from 'react-redux';

const BestSelling = () => {

    const state = useSelector(state => state.product.listProduct)
    const dispatch = useDispatch()
  
  
    useEffect(() => {
  
      dispatch(getProducts())
  
    },[])

    return (
        <div className='best-selling'>


            <MainCateProduct listProduct={state} />

        </div>
    )
}

export default BestSelling