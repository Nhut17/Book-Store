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
        formState: { errors }
    } = useForm()

    const onHandleSubmit = (formData) => {

     console.log('formdata: ' + JSON.stringify(formData))

    }

    return (
        <div className='ModalUpdateAddress'  >
            <Modal
                open={showUpdateAddressModal}
                onClose={toggle}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'custom-modal-update-address',
                }}>
                <form className='update-address' onSubmit={handleSubmit(onHandleSubmit)}>
                    <span className='delivery-address'>Chỉnh sửa địa chỉ giao hàng</span>
                    <div className="input-group">
                        <div className=' input-common'>
                            <label>Họ và tên</label>
                            <input type="text" placeholder='Họ và tên' value={data.name}></input>
                        </div>
                        <div className=' input-common'>
                            <label>Địa chỉ cụ thể</label>
                            <input 
                                type="text" 
                                placeholder='Địa chỉ cụ thể' 
                                defaultValue={data.address}
                                {...register('address',{

                                })} ></input>
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
                </form>
               
            </Modal>
        </div>
    )
}
export default ModalUpdateAddress