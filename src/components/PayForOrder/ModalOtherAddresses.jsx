import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { userAddresses } from '../data'
import AddressItem from './AddressItem';
const ModalOtherAddresses = ({ showModal, setShowModal }) => {

    const toggle = () => {
        console.log('setShowModal', setShowModal)
        setShowModal(false)
    }
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
                        {userAddresses.map((item, index) => (
                            <AddressItem data={item} index={index} />
                        ))}
                    </div>
                </div>


            </Modal>
        </div>
    )
}
export default ModalOtherAddresses