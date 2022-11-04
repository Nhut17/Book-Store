import React from 'react'
import { useState } from 'react'
import '../../sass/CartShopping/activeCart.scss'

const ActiveCart = ({carRef}) => {

    const [quantity,setQuantity] = useState(10000)

  return (
    <div className='active-cart'>
        <ul>
            <li>
                <div className="img"><img src="https://www.vinabook.com/images/thumbnails/product/240x/372171_p96095m371518p96095msapienstruyentranhbia1tap2.jpg" alt="" /></div>
                <div className="info-pro">
                    <p className='name'>Tuyết</p>
                    <span className='quantity-price'>1 x <span className='price'>{quantity.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span></span>
                   
                </div>
                <i class="fa-solid fa-trash ic-delete"></i>
                
            </li>
        </ul>
        <div className="total-price">
                <span className="total">Tổng cộng:<span className='price'>{quantity.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span></span>
                <button>XEM GIỎ HÀNG</button>
        </div>
    </div>
  )
}

export default ActiveCart