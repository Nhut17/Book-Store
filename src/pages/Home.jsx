import React from 'react'
import '../sass/Home/home.scss'
import { list_cate_products } from '../components/data'
import CategoriesProduct from '../components/Home/CategoriesProduct'
import ListBanner from '../components/Home/ListBanner'

const Home = () => {
  return (
    <div className='home'>
        <div className="container">

          <div className="main-top">
            
            <CategoriesProduct list_cate={list_cate_products} />

            <ListBanner />

          </div>

        </div>
    </div>
  )
}

export default Home
