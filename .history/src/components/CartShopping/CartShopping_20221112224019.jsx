import React,{forwardRef, useEffect} from 'react'
import ActiveCart from './ActiveCart'
import EmptyCart from './EmptyCart'
import '../../sass/CartShopping/cartShopping.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../redux/reducer/cartSlice'
const CartShopping = ({cartRef}) => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token)
    {
      dispatch(getCart())
      console.log('cart: ' + cart)
    }
  },[])

  return (
    <div className='drop-down'ref={cartRef} >
      <span className='quantity-item'>{}</span>
      {
        cart?.length > 0 ? (
          <ActiveCart listCart={cart} />
        ) : (
            <EmptyCart />
        )
      }
       
        
    </div>
  )
}

export default CartShopping