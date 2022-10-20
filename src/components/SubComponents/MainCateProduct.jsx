import React from 'react'
import Breadcrumb from './Breadcrumb'
import PageMainCategories from './PageMainCategories'
import '../../sass/MainCateProduct/mainCateProduct.scss'

const MainCateProduct = () => {
  return (
    <div className='main-cate-product'>

        <div className="container">
            <Breadcrumb />

            <PageMainCategories />

        </div>

    </div>
  )
}

export default MainCateProduct