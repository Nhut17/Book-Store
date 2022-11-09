import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({data}) => {
  return (
    <div className='product' key={data.id}>
        
        <div className="info-book">
            
            <div className="img">
                <Link to='/'>
                    <img src={data.proImage} alt="" />
                </Link>
            </div>

            <div className="content">
                <Link to='/'>
                <p className='name'>{data.proName}</p>
                <p className="author">{data.author}</p>
                <p className="description">{data.proDescription}</p>        
                </Link>
            </div>
        </div>

        <div className="box-buy">
            <span className='promotion'>-{data.proSale}%</span>
            <span className="price-old">{data.proPrice.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span></span>
            <span className="price-new">{data.priceNew.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span>
                                    </span>
        </div>

        

    </div>
  )
}

export default Product
