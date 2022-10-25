import React from 'react'
import ActiveCart from './ActiveCart'
import '../../sass/CartShopping/cartShopping.scss'
const CartShopping = () => {
  return (
    <div className='drop-down'ref={cartRef} >
        <ActiveCart />
    </div>
  )
}

export default CartShopping