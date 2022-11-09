import React, { useState } from 'react'
import { list_main_product } from '../data'
import ComfirmedBooks from './ComfirmedBooks'
import ConfirmedAddressAndServices from './ConfirmedAddressAndServices'
import ConfirmedSummaryOrder from './ConfirmedSummaryOrder'
import { useDispatch, useSelector } from 'react-redux';

const ConfirmOrder = () => {
  const listCart = useSelector(state => state.cart.cart)
  const [totalPrice, setTotalPrice] = useState(listCart.reduce((acc, val) => {
    return acc + (val.quantity * val.price)
  }, 0))

  return (
    <div className='confirm-order'>
      <div className='up-content'>xác nhận đặt hàng</div>
      <div className='down-content'>
        <ComfirmedBooks listbook={listCart} />
        <ConfirmedAddressAndServices />
        <ConfirmedSummaryOrder totalPrice={totalPrice} />
      </div>

    </div>
  )
}

export default ConfirmOrder