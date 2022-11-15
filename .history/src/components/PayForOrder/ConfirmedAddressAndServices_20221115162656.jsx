import React from 'react'
const ConfirmedAddressAndServices = ({ defaultAddress, payment }) => {

    return (
        <div className='confirmed-address-and-services'>
            <div className='address'>
                <div className='title'>
                    <span className='tilte-address'>Địa chỉ giao hàng</span>
                </div>
                <span className='bold'></span>
                <p className='customer-name'>Họ tên: {defaultAddress.name}</p>
                <p>Địa chỉ: {defaultAddress.address}</p>
                <p className='customer-phone'>Số điên thoại: {defaultAddress.phoneNumber}</p>
            </div>
            <div className='delivery-note'>
                <span>GHI CHÚ GIAO HÀNG</span>
                <p>{defaultAddress.note}</p>
            </div>
            <div className='payment'>
                <div className='title'>
                    <span className='tilte-address'>Hình thức thanh toán</span>
                </div>
                {payment}
            </div>
        </div>
    )
}
export default ConfirmedAddressAndServices