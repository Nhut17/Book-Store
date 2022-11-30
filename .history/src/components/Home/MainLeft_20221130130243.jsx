import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { new_book } from '../../components/data'
import { good_book } from '../../components/data'
import { commic_book } from '../../components/data'
import BoxBook from '../../components/Home/BoxBook.jsx'
import BoxCateProduct from './BoxCateProduct'
import FeaturedAuthor from './FeaturedAuthor'
import ListBoxCateProduct from './ListBoxCateProduct'

const MainLeft = ({list_product}) => {

  const dispatch = useDispatch()
  const { listProductCate } = useSelector(state => state.product)
  const { listCate } = useSelector(state => state.category)

  return (
    <div className='main-left'>

            

            <BoxBook data={new_book} title={'Sách mới hay'}  nameCate={'new-book'}/>
            <BoxCateProduct title={'Sách Bán Chạy'}
                            list_product={list_product} />
            <BoxBook data={good_book} title={'Sách Hay'}  nameCate={'good-book'} />
            <BoxCateProduct title={'Sách Văn Học mới'}
                            list_product={list_product} />
            <BoxBook data={commic_book} title={'Truyện tranh'} nameCate={'commic-book'} />
            <BoxCateProduct title={'Sách Kinh Tế Mới'}
                            list_product={list_product} />

            <FeaturedAuthor />

            <BoxCateProduct title={'Tạp chí bán chạy nhất'}
                            list_product={list_product} />
            <BoxCateProduct title={'Sách Nuôi Dạy Trẻ'}
                            list_product={list_product} />
            <BoxCateProduct title={'Sách Thiếu Nhi Mới'}
                            list_product={list_product} />
            <BoxCateProduct title={'Sách Kỹ Năng'}
                            list_product={list_product} />
                        
    </div>
  )
}

export default MainLeft