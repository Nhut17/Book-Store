import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Product = ({data}) => {

    const [priceDeal, setPriceDeal] = useState(data.proPrice - data.proPrice * (data.proSale / 100))
    // const priceDeal = useSelector(state => state.product.)


  return (
    <Link to={`/product-detail/${data.id}`} reloadDocument>
    <div className='product' key={data.id}>
        
        <div className="info-book">
            
            <div className="img">
                    <img src={data.proImage} alt="" />
            </div>

            <div className="content">
             
                <p className='name'>{data.proName}</p>
                <p className="author">{data.author}</p>
                <p className="description">{data.proDescription}</p>        
               
            </div>
        </div>

        <div className="box-buy">
            <span className='promotion'>-{data.proSale}%</span>
            
            <>
            {
                data.proSale > 0 && <span className="price-old">{data.proPrice?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                    <span className='currency'>&#8363;</span></span>
            }
           
            <span className="price-new">{priceDeal.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span>
                                    </span>
            </>
        </div>

        

    </div>
    </Link>

  )
}

export default Product
