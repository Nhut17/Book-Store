import React from 'react'
import { list_main_product } from '../data'
import ComfirmedBooks from './ComfirmedBooks'
import ConfirmedAddressAndServices from './ConfirmedAddressAndServices'
import ConfirmedSummaryOrder from './ConfirmedSummaryOrder'
const ConfirmOrder = () => {
  return (
    <div className='confirm-order'>
      <div className='up-content'>xác nhận đặt hàng</div>
      <div className='down-content'>
        <ComfirmedBooks listbook={list_main_product} />
        <ConfirmedAddressAndServices />
        <ConfirmedSummaryOrder />
      </div>

    </div>
  )
}

export default ConfirmOrder