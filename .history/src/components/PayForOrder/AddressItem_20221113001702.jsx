import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalUpdateAddress from './ModalUpdateAddress';

const AddressItem = ({ data, selected, setSelected }) => {
    const handleChangeDeliveryAddress = () => {
        setSelected(data.id)
    }
    const [showUpdateAddressModal, setShowUpdateAddressModal] = useState(false)
    const handleOpenUpdateAddressModal = () => {
        setShowUpdateAddressModal(true)
    }
    
    const dispatch = useDispatch()

    const handleDelete = () => {
          dispatch()
    }

    return (
        <div className={data.id === selected ? 'Address-Item defaut-address' : 'Address-Item'}>
            <div className='up'>
                <span className='name'>{data.name}</span>
                <span className='default'>{data.add_default === true ? 'Địa chỉ mặc định' : ''}</span>
            </div>
            <p className='address'>Địa chỉ: {data.address}</p>
            <p>Điện thoại: {data.phoneNumber}</p>
            <p>Lưu ý: {data.note}</p>
            <div className='btn-group'>
                <button
                    onClick={handleChangeDeliveryAddress} className={data.id === selected ? 'active-btn' : ''}>Giao đến địa chỉ này</button>
                <button onClick={handleOpenUpdateAddressModal}>Sửa</button>
                {data.add_default === false ? <button onClick={handleDelete}>Xóa</button> : ''}
            </div>
            {showUpdateAddressModal === true ? <ModalUpdateAddress data={data} showUpdateAddressModal={showUpdateAddressModal} setShowUpdateAddressModal={setShowUpdateAddressModal} /> : ''}
            {/* <ModalUpdateAddress showUpdateAddressModal={showUpdateAddressModal} setShowUpdateAddressModal={setShowUpdateAddressModal} /> */}
        </div>
    )
}
export default AddressItem