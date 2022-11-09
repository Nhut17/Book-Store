import React, { useState } from 'react'

const ListBookRight = ({list_product,title}) => {


  return (
    <div className='list-book-right'>
        <span className="title">{title}</span>
        <ul>
            {
                list_product?.slice(0,10).map(item => (
                    
                ))
            }
        </ul>
    </div>
  )
}

export default ListBookRight
