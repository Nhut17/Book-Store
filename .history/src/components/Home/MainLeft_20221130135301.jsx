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
  const { listCate } = useSelector(state => state.category)

  return (
    <div className='main-left'>

            {
              listCate.map((val,index) => (
                <ListBoxCateProduct category={val} nameCate={index} />
              ))
            }

            
            
                        
    </div>
  )
}

export default MainLeft