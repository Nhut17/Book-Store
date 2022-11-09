import React from 'react'
import EachTransaction from './EachTransaction'
const OrderDetail = ({ key, data }) => {
    return (
        <div className='order-detail' key={key}>
            <span>{data.ordDate}</span>
            {data.transactionMapper.map((item, index) => (
                <EachTransaction key={index} orderDetail={item} />
            ))}
            <div className='order-price'>
                <span>Tổng tiền: {data.ordTotalPrice}</span>
                <button className='detail-btn'>
                    Xem chi tiết
                </button>
            </div>
        </div>
    )
}
export default OrderDetail