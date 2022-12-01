import React from 'react'
import { useSelector } from 'react-redux'
import { new_book } from '../data'
import BoxBook from './BoxBook'

const ListBoxCateProduct = ({category,nameCate}) => {

    const { listProduct } = useSelector(state => state.product)

    const data = listProduct.filter(val => val.category === category.catName)

  return (
    <React.Fragment>

        <BoxBook data={category.id} title={category.catName}  nameCate={nameCate}/>

    </React.Fragment>
  )
}

export default ListBoxCateProduct
