import React from 'react'
import Product from './Product'

const ListProduct = ({list_product}) => {
  return (
    <div className='list-product'>
        {
            list_product.slice(0,6).map((product) =>(
                <Product data={product} />
            ))
        }
    </div>
  )
}

export default ListProduct
