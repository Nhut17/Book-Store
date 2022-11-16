
import OrderDetail from '../components/Order/OrderDetail'

import { getAllOrderOfUser } from '../redux/reducer/orderSlice'
import '../sass/Order/order.scss'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const OrderList = () => {
    const listOrderOfUser = useSelector(state => state.order.listOrderOfUser)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllOrderOfUser())
    }, [])
    return (
        <div className='order-list'>
            <span className='title'>Đơn hàng của tôi</span>
            {
                listOrderOfUser?.map((item, index) => (
                    <OrderDetail key={index} data={item} />
                ))
            }
        </div>
    )
}
export default OrderList