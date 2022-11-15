import { React, useState } from 'react';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { userAddresses } from '../data'
import AddressItem from './AddressItem';
import ModalAddNewAddress from './ModalAddNewAddress';
import { useSelector } from 'react-redux';


const ModalOtherAddresses = ({ showModal, setShowModal }) => {

    const [showAddNewAddress, setShowAddNewAddress] = useState(false)
    const listAddress = useSelector(state => state.address.listAddress)

    const handleAddNewAddress = () => {
        setShowAddNewAddress(true)
    }
    const toggle = () => {
        setShowModal(false)
    }
    const [selected, setSelected] = useState()
    return (
        <div className='ModalOther-Addresses'>
            <Modal
                open={showModal}
                onClose={toggle}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'custom-modal-other-addresses',
                }}>
                <div>
                    <span className='delivery-address'>Địa chỉ giao hàng</span>
                    <div className='list-addresses'>
                        {userAddresses.map(item => (
                            <div className={item.id === selected ? 'each-address selected' : 'each-address'} key={item.id}>
                                <input className='radio-input' type="radio"
                                    checked={selected === item.id}
                                    onChange={() => setSelected(item.id)}></input>
                                <AddressItem data={item} selected={selected} setSelected={setSelected} />
                            </div>
                        ))}
                    </div>
                    <button className='btn-add-new-address' onClick={handleAddNewAddress}><i class="fa-light fa-plus" ></i>Thêm địa chỉ mới</button>
                    <ModalAddNewAddress showAddNewAddress={showAddNewAddress} setShowAddNewAddress={setShowAddNewAddress} />
                </div>
                <button>XÁC NHẬN</button>
            </Modal>
        </div>
    )
}
export default ModalOtherAddresses