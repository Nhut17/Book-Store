import { React, useState } from 'react'
import EachTransaction from './EachTransaction'
const OrderDetail = ({ key, data }) => {
    const [evaluated, setEvaluated] = useState(
        data.ordStatus === 'DONE' ? true : false
    )
    console.log(data)
    return (
        <div className='order-detail' key={key}>

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
        </div>
    )
}
export default OrderDetail