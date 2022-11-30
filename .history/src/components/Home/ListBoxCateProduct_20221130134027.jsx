import React from 'react'
import { useSelector } from 'react-redux'
import { list_product, new_book } from '../data'
import BoxBook from './BoxBook'
import BoxCateProduct from './BoxCateProduct'

const ListBoxCateProduct = ({category,nameCate}) => {

    const { listProduct } = useSelector(state => state.product)

    const data = listProduct.filter(val => val.category === category.catName)

    console.log(data)

  return (
    <React.Fragment>

        <BoxBook data={data} title={category.catName}  nameCate={nameCate}/>
        <BoxCateProduct list_product={data}  />

    </React.Fragment>
  )
}

export default ListBoxCateProduct
