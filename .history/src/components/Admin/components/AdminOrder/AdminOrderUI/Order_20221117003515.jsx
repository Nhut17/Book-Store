import React from "react";
import { useDispatch } from "react-redux";



function  Order(props) {
  
  let status  = 'pending'
  let paymentResult = false
  let paymentMethod = 'payOnline'
  let cancelOrder = false

  return (
    
     <tr>
        <td className="id-order">1</td>
        <td className="name-customer">1</td>
        <td className="product-name">Lorem</td>
        <td className="quantity">1</td>
        <td className="date-buy">1</td>
        <td><span className="status">1</span></td>
        <td className="btn-group"
            style={{
             
            }} >
          <button className="confirm btn">Xác nhận đơn</button>
          <button className="cancel btn">Hủy đơn</button>
        </td>
     </tr>
    
  );
}

export default Order;
