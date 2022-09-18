import React from 'react'
import Product from './Product'

const ListProduct = ({list_product}) => {
  return (
    <div className='list-product'>
        {
            list_product.map((product) =>(
                <Product data={product} />
            ))
        }
    </div>
  )
}

export default ListProduct
