import React from "react";
import { useDispatch } from "react-redux";



function  Order({data}) {
  
  

  return (
    
     <tr>
        <td className="id-order">#{data.id}</td>
        <td className="name-customer">name</td>
        <td className="product-name">Lorem</td>
        <td className="quantity">1</td>
        <td className="date-buy">1</td>
        {/* {
          data.status === 'PENDING' && 
        <td><span className="status pending">{data.status}</span></td>
        }
        {
          data.status === 'DONE' && 
        <td><span className="status done">{data.status}</span></td>
        }
        {
          data.status === 'CANCELED' && 
        <td><span className="status cancel">{data.status}</span></td>
        } */}
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