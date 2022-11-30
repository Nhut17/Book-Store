import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemSearchProduct = ({data}) => {

    const [priceDeal,setPriceDeal] = useState(0)

  return (
    <Link to={`/product-detail/${data.id}`} reloadDocument>
    <div className='item-search-product' key={data.id}>
        <div className="flex">

      
        <div className="image"><img src={data.proImage} alt="" /></div>

        <div className="content-item">
            <div className="a-center">
                <span className='name'>{data.proName}</span>
                <span className='author'>Tác giả: {data.author}</span>
                <span className="priceDeal">{data?.curPrice?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    <span className='currency'>&#8363;</span>
                </span>
                <span className="priceOld">{data.proPrice?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                    <span className='currency'>&#8363;</span></span>
            </div>
        </div>

        </div>
    </div>
    </Link>

  )
}

export default ItemSearchProduct
