import React from 'react'
import ListBookRight from './ListBookRight'
import { Link } from 'react-router-dom'

const MainRight = ({list_product}) => {
  return (
    <div className='main-right'>
     
      <ListBookRight list_product={list_product} title={'Sách bán chạy trong tuần'} />
      <ListBookRight list_product={list_product} title={'Báo Chí Giới Thiệu'} />
      <ListBookRight list_product={list_product} title={'Sách Mới Nhập Về'} />
      <ListBookRight list_product={list_product} title={'Truyện Kể Cho Bé'} />


      <div className="pay-QR">

        <Link><img src="https://www.vinabook.com/images/App-VNB_opt4.png" alt="" /></Link>
        <Link><img src="https://www.vinabook.com/images/App-VNBR.png" alt="" /></Link>
      
      </div>

    </div>
  )
}

export default MainRight