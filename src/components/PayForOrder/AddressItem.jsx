import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAddresses } from '../../redux/reducer/addressSlice';
import ModalUpdateAddress from './ModalUpdateAddress';

const AddressItem = ({ data, selected, setSelected }) => {
    
    const [showUpdateAddressModal, setShowUpdateAddressModal] = useState(false)
    const handleOpenUpdateAddressModal = () => {
        setShowUpdateAddressModal(true)
    }

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteAddresses(data.id))
    }

    return (
        <div className={data.id === selected ? 'Address-Item defaut-address' : 'Address-Item'}>
            <div className='up'>
                <span className='name'>{data.name}</span>
                <span className='default'>{data.add_default === true ? 'Địa chỉ giao hàng' : ''}</span>
            </div>
            <p className='address'>Địa chỉ: {data.address}</p>
            <p>Điện thoại: {data.phoneNumber}</p>
            <p>Lưu ý: {data.note}</p>
            <div className='btn-group'>
                
                <button onClick={handleOpenUpdateAddressModal}>Sửa</button>
                {data.add_default === false ? <button onClick={handleDelete}>Xóa</button> : ''}
            </div>
            {showUpdateAddressModal === true ? <ModalUpdateAddress data={data} showUpdateAddressModal={showUpdateAddressModal} setShowUpdateAddressModal={setShowUpdateAddressModal} /> : ''}
            {/* <ModalUpdateAddress showUpdateAddressModal={showUpdateAddressModal} setShowUpdateAddressModal={setShowUpdateAddressModal} /> */}
        </div>
    )
}
export default AddressItem