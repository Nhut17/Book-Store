import React from 'react'
import ItemSearchProduct from './ItemSearchProduct'

const SearchProduct = ({listProduct}) => {
  return (
    <div className='search-product' style={
        list
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
