import React from 'react'
import ActiveCart from './ActiveCart'
import EmptyCart from './EmptyCart'
import '../../sass/CartShopping/cartShopping.scss'
const CartShopping = ({cartRef}) => {
  return (
    <div className='drop-down'ref={cartRef} >
        <ActiveCart />
        <Emp
    </div>
  )
}

export default CartShopping