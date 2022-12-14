import { React, useState } from 'react';


import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addAddresses } from '../../redux/reducer/addressSlice';
const ModalAddNewAddress = ({ showAddNewAddress, setShowAddNewAddress }) => {
    const toggle = () => {
        setShowAddNewAddress(false)
    }

    const { 
        register,
        handleSubmit
     } = useForm()

     const dispatch = useDispatch()

     const onHandleSubmit = (formData) => {
           dispatch(addAddresses(formData))
     }

    return (
        <div className='Modal-Add-New-Address'>
            <Modal
                open={showAddNewAddress}
                onClose={toggle}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'custom-modal-add-new-address',
                }}>
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className='add-new-address'>
                        <span className='delivery-address'>Chỉnh sửa địa chỉ giao hàng</span>
                        <div className="input-group">
                            <div className='input-common'>
                                <label>Họ và tên</label>
                                <input 
                                   type="text" 
                                   placeholder='Họ và tên'
                                   {...register('name')} ></input>
                            </div>
                            <div className='input-common'>
                                <label>Địa chỉ cụ thể</label>
                                <input 
                                   type="text" 
                                   placeholder='Địa chỉ cụ thể'
                                   {...register('address')} ></input>
                            </div>
                            <div className='input-common'>
                                <label>Điện thoại</label>
                                <input 
                                   type="text" 
                                   placeholder='Điện thoại'
                                   {...register('phoneNumber')} ></input>
                            </div>
                            <div className='input-common'>
                                <label>Thông tin lưu ý</label>
                                <input type="text" placeholder='Thông tin lưu ý' ></input>
                            </div>
                        </div>
                    </div>
                    <div className='btn-group-add-address'>
                        <button className='btn confirm'>Xác nhận</button>
                        <button className='btn cancel'>Hủy</button>
                    </div>
                </form>
                {/*  */}
            </Modal>
        </div>
    )
}
export default ModalAddNewAddress