import React from 'react'

const ProductRight = ({item}) => {
  return (
    <li key={item.id}>
    <div className="img"><img src={item.proImage} alt="" /></div>
    <div className="content">
        <p className='name'>{item.proName}</p>
        <p className='author'>{item.author}</p>
        <span className="price-old">{item.proPrice.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                <span className='currency'>&#8363;</span></span>
        <span className="price-new">{priceDeal.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                <span className='currency'>&#8363;</span>
                </span>
    </div>
</li>
  )
}

export default ProductRight
