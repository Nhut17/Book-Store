import React from 'react';
import Order from './Order';


function ListOrder(props) {
   
    return (
       <div className="all-order">

            <table>
                <tr>
                    <th style={{width : '7%'}}>Mã đơn</th>
                    <th>Khách hàng</th>
                    <th>Sản phẩm</th>
                    <th style={{width : '10%'}}>Số lượng</th>
                    <th>Ngày mua</th>
                    <th>Trạng thái</th>
                    <th>Actions</th>
                </tr>
            </table>

           <Order></Order>
       </div>
    );
}

export default ListOrder;