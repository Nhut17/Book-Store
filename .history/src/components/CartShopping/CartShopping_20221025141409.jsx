import React from 'react'
import ActiveCart from './ActiveCart'
import '../../sass/CartShopping/cartShopping.scss'
const CartShopping = ({cartRef}) => {
  return (
    <div className=''>
        <ActiveCart ref={cartRef} />
    </div>
  )
}

export default CartShopping