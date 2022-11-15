import { React, useState } from 'react';

import ModalOtherAddresses from './ModalOtherAddresses'
const ConfirmAddress = ({ selectedAddress }) => {

    const [showModal, setShowModal] = useState(false)
    const handleOpenModal = () => {
        setShowModal(true)
    }
    return (
        <div className='Confirm-Address'>
            <div className='title'>
                <span className='tilte-address'>Địa chỉ giao hàng</span>
                <span className='change-address' onClick={handleOpenModal}>
                    <i className="fa-solid fa-pen-to-square"></i>
                    Sửa
                </span>
            </div>
            <p>{selectedAddress.name}</p>
            <p>{selectedAddress.address}</p>
            <p>{selectedAddress.phoneNumber}</p>
            <p>{selectedAddress.deliveryTime}</p>
            <div className='down-content'>
                <span>Phí vận chuyển: miễn phí</span>
                <br></br>
                <br></br>
                <br></br>
                <div className='delivery-note'>
                    <div className='title'>ghi chú giao hàng</div>
                    <textarea></textarea>
                </div>
            </div>
            <ModalOtherAddresses  showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}
export default ConfirmAddress