import React from 'react'
import { new_book } from '../data'
import BoxBook from './BoxBook'

const ListBoxCateProduct = ({category}) => {
  return (
    <div>
    <BoxBook data={new_book} title={'Sách mới hay'}  nameCate={'new-book'}/>
    </div>
  )
}

export default ListBoxCateProduct
