import React from 'react'
import '../../sass/CartShopping/activeCart.scss'

const ActiveCart = () => {
  return (
    <div className='active-cart'>
        <ul>
            <li>
                <div className="img"><img src="https://www.vinabook.com/images/thumbnails/product/240x/372171_p96095m371518p96095msapienstruyentranhbia1tap2.jpg" alt="" /></div>
                <div className="info-pro">
                    <p className='name'>Tuyếtsadsad</p>
                    <span className='quantity-price'>1 x <span className='price'>126000</span></span>
                   
                </div>
                <i class="fa-solid fa-trash ic-delete"></i>
                
            </li>
        </ul>
        <div className="total-price">
                <span className="total">Tổng cộng: </span>
                <button>XEM GIỎ HÀNG</button>
        </div>
    </div>
  )
}

export default ActiveCart