import { React, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { cancelByUser } from '../../redux/reducer/orderSlice'

import EachTransaction from './EachTransaction'
const OrderDetail = ({ data }) => {
    const [evaluated, setEvaluated] = useState(
        data.ordStatus === 'DONE' ? true : false
    )
    const dispatch = useDispatch()

    const handleCancel = (id) => {
        console.log(id)
        dispatch(cancelByUser(id))
    }
    return (
        <div className='order-detail'>
            {data.transactionMapper.map((item, index) => (
                <EachTransaction key={index} orderDetail={item} evaluated={evaluated} />
            ))}
            <div className='summary-order'>
                <span className='summary-address'>Địa chỉ: {data.ordAddress}</span>
                <span className='summary-date'>{data.ordDate}</span>
                <span className='summary-phone'>Số điện thoại: {data.ordPhone}</span>
                {data.ordStatus === 'PENDING' &&
                    <span className='summary-status-pending'><i class="fa-solid fa-circle icon"></i> {data.ordStatus}</span>
                }
                {data.ordStatus === 'DONE' &&
                    <span className='summary-status-done'><i class="fa-solid fa-circle icon"></i> {data.ordStatus}</span>
                }
                {data.ordStatus === 'CANCELED' &&
                    <span className='summary-status-cancel'><i class="fa-solid fa-circle icon"></i> {data.ordStatus}</span>
                }
                <span className='summary-total-price'>Tổng tiền: {data.ordTotalPrice?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span>
            </div>
            <div className='cancel-order' hidden={data.ordStatus === 'PENDING' ? false : true}>
                <button onClick={() => handleCancel(data.id)}>Hủy đơn hàng </button>
            </div>
        </div>
    )
}
export default OrderDetail