import React from 'react';
import Order from './Order';


function ListOrder(props) {

    cons
   
    return (
       <div className="all-order">

            <table>
                <tr>
                    <th style={{width : '7%'}}>Mã đơn</th>
                    <th style={{width : '13%'}}>Khách hàng</th>
                    <th style={{width : '30%'}}>Sản phẩm</th>
                    <th style={{width : '10%'}}>Số lượng</th>
                    <th style={{width : '13%'}}>Ngày mua</th>
                    <th style={{width : '10%'}}>Trạng thái</th>
                    <th>Actions</th>
                </tr>
            
           <Order />
            
            </table>


       </div>
    );
}

export default ListOrder;