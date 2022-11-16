import React from 'react';
import Order from './Order';


function ListOrder(props) {
   
    return (
       <div className="all-order">

            <table>
                <tr>
                    <th>Mã đơn</th>
                    <th>Khách hàng</th>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
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