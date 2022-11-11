import React, { useEffect } from 'react'
import '../sass/Home/home.scss'
import { list_cate_products } from '../components/data'
import CategoriesProduct from '../components/Home/CategoriesProduct'
import ListBanner from '../components/Home/ListBanner'
import MainLeft from '../components/Home/MainLeft'
import MainRight from '../components/Home/MainRight'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/reducer/productSlice'

const Home = () => {

  const dispatch = useDispatch()
  const listProduct = useSelector(state => state.product.listProduct)

  useEffect(() => {
    dispatch(getProducts())
  },[])

  return (
    <div className='home'>
        <div className="container">

          <div className="main-top">
            
            <CategoriesProduct  />

            <ListBanner />

          </div>

          <div className="main">

            <MainLeft list_product={listProduct} />

            <MainRight list_product={listProduct} />

          </div>

        </div>
    </div>
  )
}

export default Home
