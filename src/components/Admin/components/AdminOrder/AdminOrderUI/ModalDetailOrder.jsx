import React from 'react'
import 'react-responsive-modal/styles.css';
import { useDispatch } from "react-redux";

import { acceptOrder, cancelOrder } from "../../../../../redux/reducer/orderSlice";

// import Modal from 'react-modal';
import { Modal } from 'react-responsive-modal';
function ModalDetailOrder({ showOrderDetail, setShowOrderDetail, data }) {
    const toggle = () => {
        setShowOrderDetail(false)
    }
    const dispatch = useDispatch()

    const handleConfirm = () => {
        console.log('data:', data)
        dispatch(acceptOrder(data.id))
    }

    const handleCancel = () => {
        dispatch(cancelOrder(data.id))
    }
    const handleClickOrderDetail = () => {
        setShowOrderDetail(false)
    }
    return (
        <Modal
            open={showOrderDetail}
            onClose={toggle}
            classNames={{
                overlay: 'customOverlay',
                modal: 'custom-modal-detail-order',
            }}
        >

            <h2 className='title'>Thông tin đơn hàng </h2>
            <div className='summary-infor-order'>
                <ul>
                    <h5 className='data-in-modal'>Mã đơn hàng</h5>
                    <h5 className='data-in-modal '>Ngày đặt</h5>
                    <h5 className='data-in-modal'>Trạng Thái</h5>
                    <h5 className='data-in-modal'>Tổng giá</h5>
                    <h5 className='data-in-modal'>Phone</h5>
                </ul>
                <ul>
                    <h5 className='data-in-modal'>{data.id}</h5>
                    <h5 className='data-in-modal'>{data.ordDate}</h5>
                    {
                        data.ordStatus === 'PENDING' &&
                        <h5 className="data-in-modal status pending">{data.ordStatus}</h5>
                    }
                    {
                        data.ordStatus === 'DONE' &&
                        <h5 className="data-in-modal status done">{data.ordStatus}</h5>
                    }
                    {
                        data.ordStatus === 'CANCELED' &&
                        <h5 className="data-in-modal status cancel">{data.ordStatus}</h5>
                    }
                    <h5 className='data-in-modal'>{data.ordTotalPrice?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></h5>
                    <h5 className='data-in-modal'>{data.ordPhone}</h5>
                </ul>
                <ul>
                    <h5 className='data-in-modal'>Thông tin khách hàng</h5>
                    <h5 className='data-in-modal'>Địa chỉ nhận hàng</h5>
                    <h5 className='data-in-modal'>Phương thức thanh toán</h5>
                    <h5 className='data-in-modal'>Phí vận chuyển</h5>
                    <h5 className='data-in-modal'>Ghi chú</h5>
                </ul>
                <ul>
                    <h5 className='data-in-modal'>{data.ordUsername}</h5>
                    <h5 className='data-in-modal'>{data.ordAddress}</h5>
                    <h5 className='data-in-modal'>{data.ordPayment}</h5>
                    <h5 className='data-in-modal'>{data.ordShippingFee?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></h5>
                    <h5 className='data-in-modal'>{data.ordNote}</h5>
                </ul>
            </div>
            <div className='btn-group'>

                <button className="detail btn" onClick={handleClickOrderDetail}>
                    {/* <i class="fas fa-eye"> </i> */}
                    <span>Đóng</span>
                </button>
                <button className={data.ordStatus === 'PENDING' ? "confirm btn" : " btn disable"} onClick={handleConfirm}>
                    {/* <i class="fas fa-check"></i> */}
                    <span>Xác nhận đơn</span>
                </button>
                <button className={data.ordStatus === 'PENDING' ? "cancel btn" : "disable btn"} onClick={handleCancel}>
                    {/* <i class="fas fa-window-close"></i> */}
                    <span> Hủy đơn</span>
                </button>



            </div>
            <hr />
            <div>
                <h2 className='title'>Chi tiết đơn hàng </h2>
                {data.transactionMapper.map(item => (
                    <div className='order-each-product'>
                        <div className="img"><img src={item.productImage} alt="" /></div>
                        <div className='product-content'>
                            <h5 className='data-in-modal'>Tên sản phẩm: {item.productName}</h5>
                            <h5 className='data-in-modal'>Trạng thái: {item.tranStatus}</h5>
                            <h5 className='data-in-modal'>Số lượng: {item.tranQuantity}</h5>
                            <h5 className='data-in-modal'>Đơn giá: {item.tranUnitPrice?.toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></h5>
                        </div>
                    </div>

                ))}
            </div>
        </Modal >

    )
}
export default ModalDetailOrder