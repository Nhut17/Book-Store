import React,{forwardRef, useEffect} from 'react'
import ActiveCart from './ActiveCart'
import EmptyCart from './EmptyCart'
import '../../sass/CartShopping/cartShopping.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../redux/reducer/cartSlice'
const CartShopping = ({props,cartRef}) => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)

  useEffect(() => {
    dispatch(getCart())
  },[])

  return (
    <div className='drop-down'ref={cartRef} >
        {/* <ActiveCart /> */}
        <EmptyCart />
    </div>
  )
}

export default forwardRef(CartShopping) 