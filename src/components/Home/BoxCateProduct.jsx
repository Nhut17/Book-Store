import React from 'react'
import { Link } from 'react-router-dom'
import ListProduct from '../ListProduct'

const BoxCateProduct = ({title,list_product}) => {
  return (
    <div className='box-cate-product'>
        <div className="title">
            <span className='tit'>{title}</span>
            <Link to='/'>
                <span className='read-more'>Xem thêm <i class="ic fa-solid fa-angle-right"></i></span>
            </Link>
        </div>

        <ListProduct list_product={list_product} />

    </div>
  )
}

export default BoxCateProduct
