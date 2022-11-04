import React, { useState } from 'react'


const MainProduct = ({data}) => {

  const [priceDeal,setPriceDeal] = useState(data.proPrice - data.proPrice*(data.proSale/100))

  return (
    <div className='main-product'>
        <div className="img"><img src={data.img} alt="" /></div>
        <div className="content">
            <p className="name">{data.proName}</p>
            <p className="author">{data.author}</p>
            <p className="price-old">{data.proPrice.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span></p>
            <p className="price-new">{data.newPrice.toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}  
                                     <span className='currency'>&#8363;</span> 
                                    {/* </p> 
        </div>

    </div>
  )
}

export default MainProduct