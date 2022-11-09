import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({data}) => {
  return (
    <div className='product' key={data.id}>
        
        <div className="info-book">
            
            <div className="img">
                <Link to='/'>
                    <img src={data.Proimg} alt="" />
                </Link>
            </div>

            <div className="content">
                <Link to='/'>
                <p className='name'>{data.name}</p>
                <p className="author">{data.author}</p>
                <p className="description">{data.description}</p>        
                </Link>
            </div>
        </div>

        <div className="box-buy">
            <span className='promotion'>-{data.promotion}%</span>
            <span className="price-old">{data.priceOld.toString()
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
