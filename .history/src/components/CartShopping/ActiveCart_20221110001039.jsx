import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { list_product } from '../data'

const ActiveCart = ({listCart}) => {

    const [quantity,setQuantity] = useState(10000)
    const [totalPrice,setTotalPrice] = useState(listCart.reduce((acc,val) => {
        return acc + (val.quantity*val.price)
},0))

    const handleDelete = () => {

    }

  return (
    <div className='active-cart'  >
        <ul style={listCart.length > 6 ? {overflowY: 'scroll'} : {}}>
            {
                listCart.map(data => (
                    <Link to={`/product-detail/${data.productId}`} reloadDocument >
                    <li key={data.id}>
                    <div className="img"><img src={data.proImage} alt="" /></div>
                    <div className="info-pro">
                        <p className='name'>{data.proName}</p>
                        <span className='quantity-price'>{data.quantity} x <span className='price'>{data.price.toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span></span>
                       
                    </div>
                    <i class="fa-solid fa-trash ic-delete" onClick={() => handleDelete(data.id)}></i>
                    
                    </li>
                    </Link>

                ))
            }
           
           
        </ul>
        <div className="total-price">
                <span className="total">Tổng cộng:<span className='price'>{totalPrice.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span></span>
                <button>XEM GIỎ HÀNG</button>
        </div>
    </div>
  )
}

export default ActiveCart