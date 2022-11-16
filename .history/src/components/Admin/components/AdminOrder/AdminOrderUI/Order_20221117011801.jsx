import React from "react";
import { useDispatch } from "react-redux";



function  Order({data}) {
  
  

  return (
    
     <tr>
        <td className="id-order">#{data.id}</td>
        <td className="product-name">product</td>
        <td className="quantity">{data.transactionMapper.length}</td>
        <td className="total-price">{data.ordTotalPrice}</td>
        <td className="date-buy">{data.ordDate}</td>
        {
          data.status === 'PENDING' && 
        <td><span className="status pending">{data.ordStatus}</span></td>
        }
        {
          data.status === 'DONE' && 
        <td><span className="status done">{data.ordStatus}</span></td>
        }
        {
          data.status === 'CANCELED' && 
        <td><span className="status cancel">{data.ordStatus}</span></td>
        }
      <td><span className="status cancel">1</span></td>
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
