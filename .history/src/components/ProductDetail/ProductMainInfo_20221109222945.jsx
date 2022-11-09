import React from 'react'
import ContentProductMainInfo from './ContentProductMainInfo'
import CheckoutInfo from './CheckoutInfo'

const ProductMainInfo = ({data}) => {
  return (
    <div className='product-main-info'>

        <div className="img" ><img src={data.proImage} alt="" /></div>

        <ContentProductMainInfo data={data} />

        <CheckoutInfo data={data}/> 

    </div>
  )
}

export default ProductMainInfo