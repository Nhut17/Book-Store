import React from 'react'
import OrderDetail from '../components/Order/OrderDetail'
import { orderList } from '../components/data'
import '../sass/Order/order.scss'
const OrderList = () => {
    console.log('orderList', orderList)
    return (
        <div className='order-list'>
            <span className='title'>Đơn hàng của tôi</span>
            {
                orderList.map((item, index) => (
                    <OrderDetail key={index} data={item} />
                ))
            }
        </div>
    )
}
export default OrderList