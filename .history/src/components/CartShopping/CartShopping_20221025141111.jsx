import React from 'react'
import ActiveCart from './ActiveCart'
import '../../sass/CartShopping/cartShopping.scss'
const CartShopping = ({cartRef}) => {
  return (
    <>
        <ActiveCart ref={cartRef} />
    </>
  )
}

export default CartShopping