import React from 'react'
import PaymentInfor from './PaymentInfor'
import DiscountCode from './DiscountCode'
const Payment = () => {
  return (
    <div className='payment'>
      <div className='content'>
        <div className='payment-title'>Hình thức thanh toán</div>
        <div className='payment-content'>
          <PaymentInfor />
          <DiscountCode />
          {/* <Address />
          <RelativeService data={data} /> */}
        </div>
      </div>
    </div>
  )
}

export default Payment