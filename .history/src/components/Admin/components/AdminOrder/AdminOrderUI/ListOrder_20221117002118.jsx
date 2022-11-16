import React from 'react';
import Order from './Order';


function ListOrder(props) {
   
    return (
       <div className="all-order">

            <table>
                <tr>
                    <th style={{width : '7%'}}>Mã đơn</th>
                    <th style={{width : '10%'}}>Khách hàng</th>
                    <th style={{width : '30%'}}>Sản phẩm</th>
                    <th style={{width : '8%'}}>Số lượng</th>
                    <th style={{width : '12%'}}>Ngày mua</th>
                    <th style={{width : '7%'}}>Trạng thái</th>
                    <th>Actions</th>
                </tr>
            
           <Order />
            
            </table>


       </div>
    );
}

export default ListOrder;