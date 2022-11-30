import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import Order from './Order';

// import ModalDetailOrder from './ModalDetailOrder';
import { Modal } from 'bootstrap';


function ListOrder(props) {

    const listOrder = useSelector(state => state.order.listOrder)
    
    return (
        <div className="all-order">

            <table>
                <tr>
                    <th style={{ width: '7%' }}>Mã đơn</th>
                    <th style={{ width: '20%' }}>Thông tin khách hàng</th>
                    <th style={{ width: '10%' }}>Số lượng sản phẩm</th>
                    <th style={{ width: '13%' }}>Tổng tiền</th>
                    <th style={{ width: '13%' }}>Ngày mua</th>
                    <th style={{ width: '10%' }}>Trạng thái</th>
                    <th>Actions</th>
                </tr>

                {
                    listOrder &&
                    listOrder.map((data) => (

                        <Order data={data} />
                    ))
                }


            </table>


        </div>
    );
}

export default ListOrder;