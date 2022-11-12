import { React, useState } from 'react';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useForm } from 'react-hook-form';
const ModalUpdateAddress = ({ data, showUpdateAddressModal,setShowUpdateAddressModal }) => {
    const toggle = () => {
        console.log('check state', showUpdateAddressModal);
        setShowUpdateAddressModal(false)
    }


    const { 
        register,
        handleSubmit,
        formState
    } = useForm()

    return (
        <form className='ModalUpdateAddress'>
            <Modal
                open={showUpdateAddressModal}
                onClose={toggle}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'custom-modal-update-address',
                }}>
                <div className='update-address'>
                    <span className='delivery-address'>Chỉnh sửa địa chỉ giao hàng</span>
                    <div className="input-group">
                        <div className=' input-common'>
                            <label>Họ và tên</label>
                            <input type="text" placeholder='Họ và tên' value={data.name}></input>
                        </div>
                        <div className=' input-common'>
                            <label>Địa chỉ cụ thể</label>
                            <input type="text" placeholder='Địa chỉ cụ thể' value={data.address}></input>
                        </div>
                        <div className=' input-common'>
                            <label>Điện thoại</label>
                            <input type="text" placeholder='Điện thoại' value={data.phoneNumber}></input>
                        </div>
                        <div className=' input-common'>
                            <label>Thông tin lưu ý</label>
                            <input type="text" placeholder='Thông tin lưu ý' value={data.note}></input>
                        </div>
                    </div>
                </div>
                <div className='btn-group-update-address'>
                    <button className='btn confirm'>Xác nhận</button>
                    <button className='btn cancel'>Hủy</button>
                </div>
            </Modal>
        </form>
    )
}
export default ModalUpdateAddress