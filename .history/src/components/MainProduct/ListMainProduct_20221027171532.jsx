import React from 'react'
import MainProduct from './MainProduct'

const ListMainProduct = ({ list_product }) => {
  return (
    <div className='list-main-product'>
      {
        list_product.map(data => (  
          <
          <MainProduct data={data} />
        ))
      }
    </div>
  )
}

export default ListMainProduct