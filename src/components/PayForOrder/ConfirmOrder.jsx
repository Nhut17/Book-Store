import { React, useEffect, useState } from 'react';


import ComfirmedBooks from './ComfirmedBooks'
import ConfirmedAddressAndServices from './ConfirmedAddressAndServices'
import ConfirmedSummaryOrder from './ConfirmedSummaryOrder'
import { useDispatch, useSelector } from 'react-redux';
import { getAllAddresses } from '../../redux/reducer/addressSlice';

const ConfirmOrder = ({ payment }) => {
  const listCart = useSelector(state => state.cart.cart)
  const [totalPrice, setTotalPrice] = useState(listCart.reduce((acc, val) => {
    return acc + (val.quantity * val.price)
  }, 0))

  const listAddress = useSelector(state => state.address.listAddress)
  let defaultAddress = listAddress.find(item => item.add_default === true)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllAddresses())
  }, [])
  return (
    <div className='confirm-order'>
      <div className='up-content'>xác nhận đặt hàng</div>
      <div className='down-content'>
        <ComfirmedBooks listbook={listCart} />
        <ConfirmedAddressAndServices defaultAddress={defaultAddress} payment={payment} />
        <ConfirmedSummaryOrder totalPrice={totalPrice} />
      </div>

    </div>
  )
}

export default ConfirmOrder