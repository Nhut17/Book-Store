import React from 'react'
import { useSelector } from 'react-redux'
import { new_book } from '../data'
import BoxBook from './BoxBook'

const ListBoxCateProduct = ({category,nameCate}) => {

    const { listProduct } = useSelector(state => state.product)

    const data = listProduct.filter(val => val.category === category.catName)

    console.log(data)

  return (
    <React.Fragment>

        <BoxBook data={data} title={category.catName}  nameCate={nameCate}/>
        <BoxCateProduct title={'Sách Bán Chạy'}
        list_product={list_product} />

    </React.Fragment>
  )
}

export default ListBoxCateProduct
