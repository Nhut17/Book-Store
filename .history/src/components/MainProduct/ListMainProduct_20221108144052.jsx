import React from 'react'
import MainProduct from './MainProduct'
import { Loading } from '../../HOCs/Loading'
const ListMainProduct = ({ list_product }) => {
  return (
    <div className='list-main-product'>
      {
        list_product.map(data => (  
          <div className="item-product" key={data.id}>
            <MainProduct data={data} />
          </div>
        ))
      }
    </div>
  )
}

export default Loading( ListMainProduct