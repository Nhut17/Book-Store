import React from 'react'
import ItemSearchProduct from './ItemSearchProduct'

const SearchProduct = ({listProduct}) => {
  return (
    <div className='search-product' style={
        listProduct.length >= 10 ? {
            height: 7
        } : {}
    }>
        {
            listProduct.map(data => (

                 <ItemSearchProduct data={data} /> 
            ))
        }
      
    </div>
  )
}

export default SearchProduct
