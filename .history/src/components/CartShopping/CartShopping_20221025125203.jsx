import React from 'react'
import EmptyCart from './EmptyCart'
import ActiveCart from './ActiveCart'
import '../../sass/CartShopping/cartShopping.scss'

const CartShopping = () => {
  return (
    <div className='cart-shopping'>
        <ActiveCart />

    </div>
  )
}

export default CartShopping