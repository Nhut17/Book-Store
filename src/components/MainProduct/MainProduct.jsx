
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MainProduct = ({ data }) => {


  const [priceDeal, setPriceDeal] = useState(data.proPrice - data.proPrice * (data.proSale / 100))


  return (
    <Link to={`/product-detail/${data.id}`} reloadDocument>
    <div className='main-product'>
      <div className="img"><img src={data.proImage} alt="" /></div>
      <div className="content">
        <p className="name">{data.proName}</p>
        <p className="author">{data.author}</p>
        {
          data.proSale > 0 && <p className="price-old">{data.proPrice.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            <span className='currency'>&#8363;</span></p>
        }

        <p className="price-new">{priceDeal.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          <span className='currency'>&#8363;</span>
        </p>

      </div>

    </div>
    </Link>
  )
}

export default MainProduct