import React from 'react'
import ItemSearchProduct from './ItemSearchProduct'

const SearchProduct = ({listProduct}) => {
  return (
    <div className='search-product'>
        {
            listProduct.map(data => (

                {/* <ItemSearchProduct /> */}
            ))
        }
      
    </div>
  )
}

export default SearchProduct
