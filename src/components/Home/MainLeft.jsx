import React from 'react'
import { new_book } from '../../components/data'
import { good_book } from '../../components/data'
import BoxBook from '../../components/Home/BoxBook.jsx'
import BoxCateProduct from './BoxCateProduct'

const MainLeft = ({list_product}) => {
  return (
    <div className='main-left'>
            <BoxBook data={new_book} title={'Sách mới hay'} />
            <BoxCateProduct title={'Sách Bán Chạy'}
                            list_product={list_product} />
            <BoxBook data={good_book} title={'Sách Hay'} />
            <BoxCateProduct title={'Sách Văn Học mới'}
                            list_product={list_product} />
            <BoxBook data={new_book} title={'Truyện tranh'} />
            <BoxCateProduct title={'Sách Kinh Tế Mới'}
                            list_product={list_product} />
                        
    </div>
  )
}

export default MainLeft