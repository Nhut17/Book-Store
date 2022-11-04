import React, { useEffect, useState } from 'react'


const MainProduct = ({data}) => {

  const [priceNew,setPriceNew] = useState(data.proPrice - data.proPrice*data.proSale)

  console.log(priceNew)

  return (
    <div className='main-product' key={1}>
        <div className="img"><img src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" /></div>
        <div className="content">
            <p className="name">{data.proName}</p>
            <p className="author">{data.author}</p>
            <p className="price-old">{data.proPrice.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span></p>
            <p className="price-new">{priceNew.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span>
                                    </p>
        </div>

    </div>
  )
}

export default MainProduct