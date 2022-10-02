import { data } from 'jquery'
import React from 'react'
import ListMainProduct from './ListMainProduct'
import '../../sass/MainProduct/mainProduct.scss'
const MainBoxProduct = ({list_product}) => {
  return (
    <div className='main-box-product'>
        
        <p className="title">Sach Giao Khoa</p>

        <ListMainProduct list_product={list_product} />

    </div>
  )
}

export default MainBoxProduct