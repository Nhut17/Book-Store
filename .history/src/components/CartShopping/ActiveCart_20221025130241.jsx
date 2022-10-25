import React from 'react'
import '../../sass/CartShopping/activeCart.scss'

const ActiveCart = () => {
  return (
    <div className='active-cart'>
        <ul>
            <li>
                <div className="img"><img src="https://www.vinabook.com/images/thumbnails/product/240x/372171_p96095m371518p96095msapienstruyentranhbia1tap2.jpg" alt="" /></div>
                <div className="info-pro">
                    <span className='name'>Tuyết</span>
                    <span className='quantity-price'>1 x <span className='price'>126000</span></span>
                </div>

                <div className="total-price">
                    <span className="total">Tổng cộng: </span>
                    <button>x</button>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default ActiveCart