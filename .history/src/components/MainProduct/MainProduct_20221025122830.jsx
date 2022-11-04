import React from 'react'


const MainProduct = ({data}) => {
  return (
    <div className='main-product' key={data.id}>
        <div className="img"><img src={data.img} alt="" /></div>
        <div className="content">
            <p className="name">{data.name}</p>
            <p className="author">{data.author}</p>
            <p className="price-old">{data.oldPrice.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span></p>
            <p className="price-new">{data.newPrice.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span>
                                    </p>
        </div>

    </div>
  )
}

export default MainProduct