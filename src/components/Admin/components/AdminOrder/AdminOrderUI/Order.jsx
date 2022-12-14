import { React, useState } from 'react';
import { useDispatch } from "react-redux";
import { acceptOrder, cancelOrder } from "../../../../../redux/reducer/orderSlice";
import ModalDetailOrder from './ModalDetailOrder';
import Modal from 'react-modal';

function Order({ data }) {

  // console.log(data)
  const dispatch = useDispatch()
  const handleConfirm = () => {
    console.log('data:', data)
    dispatch(acceptOrder(data.id))
  }

  const handleCancel = () => {
    dispatch(cancelOrder(data.id))
  }
  const handleClickOrderDetail = () => {
    setShowOrderDetail(true)
  }

  const [showOrderDetail, setShowOrderDetail] = useState(false)

  return (
    <>
      <tr>
        <td className="id-order">#{data.id}</td>
        <td className="product-name" >{data.ordUsername}</td>
        <td className="quantity">{data.transactionMapper.length}</td>
        <td className="total-price"><span className="price-old">{data.ordTotalPrice?.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          <span className='currency'>&#8363;</span></span></td>
        <td className="date-buy">{data.ordDate}</td>
        {
          data.ordStatus === 'PENDING' &&
          <td><span className="status pending">{data.ordStatus}</span></td>
        }
        {
          data.ordStatus === 'DELIVERING' &&
          <td><span className="status delivering">{data.ordStatus}</span></td>
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
          <button className={data.ordStatus === 'PENDING' || data.ordStatus === 'DELIVERING' ? "confirm btn" : "confirm btn disable"}
            onClick={handleConfirm} >
            {/* <i class="fas fa-check"></i> */}
            <span>Xác nhận đơn</span>
          </button>
          <button className={data.ordStatus === 'PENDING' ? "cancel btn" : "cancel disable btn"} onClick={handleCancel}>
            {/* <i class="fas fa-window-close"></i> */}
            <span> Hủy đơn</span>
          </button>

          <button className="detail btn" onClick={handleClickOrderDetail}
          >
            {/* <i class="fas fa-eye"> </i> */}
            <span>Xem chi tiết</span>
          </button>
        </td>
      </tr>
      <ModalDetailOrder showOrderDetail={showOrderDetail} setShowOrderDetail={setShowOrderDetail} data={data} />
    </>


  );
}

export default Order;
