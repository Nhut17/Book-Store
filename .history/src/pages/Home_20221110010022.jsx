import React, { useEffect } from 'react'
import '../sass/Home/home.scss'
import { list_cate_products } from '../components/data'
import CategoriesProduct from '../components/Home/CategoriesProduct'
import ListBanner from '../components/Home/ListBanner'
import MainLeft from '../components/Home/MainLeft'
import MainRight from '../components/Home/MainRight'
import { list_product } from '../components/data'
import { list_product_right } from '../components/data'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

  const dispacth = useDispatch()
  const listProduct = useSelector(state => state.product.listProduct)

  useEffect(() => {
    dispacth
  },[])

  return (
    <div className='home'>
        <div className="container">

          <div className="main-top">
            
            <CategoriesProduct list_cate={list_cate_products} />

            <ListBanner />

          </div>

          <div className="main">

            <MainLeft list_product={listProduct} />

            <MainRight list_product={list_product_right} />

          </div>

        </div>
    </div>
  )
}

export default Home
