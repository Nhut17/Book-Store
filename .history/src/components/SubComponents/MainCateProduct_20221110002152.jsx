import React from 'react'
import Breadcrumb from '../MainProduct/Breadcrumb'
import PageMainCategories from '../MainProduct/PageMainCategories'
import '../../sass/MainCateProduct/mainCateProduct.scss'

const MainCateProduct = ({listProduct}) => {
  return (
    <div className='main-cate-product'>

        <div className="container">
            {/* <Breadcrumb /> */}

            <PageMainCategories listProduct={list} />

        </div>

    </div>
  )
}

export default MainCateProduct