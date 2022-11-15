import React, { useState } from 'react'

const ItemSearchProduct = ({data}) => {

    const [priceDeal,setPriceDeal] = useState(0)

  return (
    <div className='item-search-product'>
        <div className="flex">

      
        <div className="image"><img src="https://www.vinabook.com/images/thumbnails/product/115x/374782_chu-nghia-khac-ki-101.jpg" alt="" /></div>

        <div className="content-item">
            <div className="a-center">
                <span className='name'>iphone 12</span>
                <span className='author'>Tác giả: Pham Quynh Nhut</span>
                <span className="priceDeal">{data.price.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    <span className='currency'>&#8363;</span>
                </span>
                <span className="priceOld">{data.pricetoString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                    <span className='currency'>&#8363;</span></span>
            </div>
        </div>

        </div>
    </div>
  )
}

export default ItemSearchProduct
