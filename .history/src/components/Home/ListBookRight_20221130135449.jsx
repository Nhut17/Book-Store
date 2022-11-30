import React, { useState } from 'react'
import ProductRight from './ProductRight'

const ListBookRight = ({cateId,title}) => {

  const { } = useSlec

  return (
    <div className='list-book-right'>
        <span className="title">{title}</span>
        <ul>
            {
                list_product?.slice(0,10).map(item => (
                    <ProductRight item={item} />
                ))
            }
        </ul>
    </div>
  )
}

export default ListBookRight
