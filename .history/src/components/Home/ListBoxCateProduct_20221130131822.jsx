import React from 'react'
import { new_book } from '../data'
import BoxBook from './BoxBook'

const ListBoxCateProduct = ({category,nameCate}) => {

    console.log(nameCate)

  return (
    <React.Fragment>

        <BoxBook cateId={} title={category.catName}  nameCate={nameCate}/>

    </React.Fragment>
  )
}

export default ListBoxCateProduct
