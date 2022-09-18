import React from 'react'
import '../sass/Home/home.scss'
import { list_cate_products } from '../components/data'
import CategoriesProduct from '../components/Home/CategoriesProduct'
import ListBanner from '../components/Home/ListBanner'
import MainLeft from '../components/Home/MainLeft'
import MainRight from '../components/Home/MainRight'
import { list_product } from '../components/data'

const Home = () => {
  return (
    <div className='home'>
        <div className="container">

          <div className="main-top">
            
            <CategoriesProduct list_cate={list_cate_products} />

            <ListBanner />

          </div>

          <div className="main">

            <MainLeft list_product={list_product} />

            <MainRight />

          </div>

        </div>
    </div>
  )
}

export default Home
