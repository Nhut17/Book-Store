
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductRight = ({item}) => {

    const [priceDeal, setPriceDeal] = useState(item.proPrice - item.proPrice * (item.proSale / 100))


  return (
    <Link to={`/product-detail/${item.id}`} reloadDocument>
    <li key={item.id}>
    <div className="img"><img src={item.proImage} alt="" /></div>
    <div className="content">
        <p className='name'>{item.proName}</p>
        <p className='author'>{item.author}</p>
        <span className="price-old">{item.proPrice?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                <span className='currency'>&#8363;</span></span>
        <span className="price-new">{priceDeal.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                <span className='currency'>&#8363;</span>
                </span>
    </div>
</li>
</Link>

  )
}

export default ProductRight
