import React from 'react'
import { new_book } from '../data'
import BoxBook from './BoxBook'

const ListBoxCateProduct = ({category,}) => {
  return (
    <React.Fragment>

        <BoxBook data={new_book} title={category.catName}  nameCate={'new-book'}/>

    </React.Fragment>
  )
}

export default ListBoxCateProduct
