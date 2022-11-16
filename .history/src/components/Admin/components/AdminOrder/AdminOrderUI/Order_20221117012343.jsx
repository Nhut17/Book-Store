import React from "react";
import { useDispatch } from "react-redux";
import { acceptOrder, cancelOrder } from "../../../../../redux/reducer/orderSlice";



function  Order({data}) {
  
  const dispatch = useDispatch()

  const handleConfirm = () => {
      dispatch(acceptOrder(data.id))
  }

  const handleCancel = () => {
    dispatch(cancelOrder(dat))
  }

  return (
    
     <tr>
        <td className="id-order">#{data.id}</td>
        <td className="product-name">product</td>
        <td className="quantity">{data.transactionMapper.length}</td>
        <td className="total-price">{data.ordTotalPrice}</td>
        <td className="date-buy">{data.ordDate}</td>
        {
          data.ordStatus === 'PENDING' && 
        <td><span className="status pending">{data.ordStatus}</span></td>
        }
        {
          data.ordStatus === 'DONE' && 
        <td><span className="status done">{data.ordStatus}</span></td>
        }
        {
          data.ordStatus === 'CANCELED' && 
        <td><span className="status cancel">{data.ordStatus}</span></td>
        }
        <td className="btn-group"
            style={{
             
            }} >
          <button className="confirm btn" onClick={handleConfirm}>Xác nhận đơn</button>
          <button className="cancel btn" onClick={handleCancel}>Hủy đơn</button>
        </td>
     </tr>
    
  );
}

export default Order;
