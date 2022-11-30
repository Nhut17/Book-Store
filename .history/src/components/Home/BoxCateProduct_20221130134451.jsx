import React from 'react'
import { Link } from 'react-router-dom'
import ListProduct from '../ListProduct'

const BoxCateProduct = ({ list_product, category }) => {
  return (
    <div className='box-cate-product'>
      <div className="title">
    
        <Link to={`/${category.catName}`}>
          <span className='read-more'>Xem thêm <i className="ic fa-solid fa-angle-right"></i></span>
        </Link>
      </div>

      <ListProduct list_product={list_product} />

    </div>
  )
}

export default BoxCateProduct
