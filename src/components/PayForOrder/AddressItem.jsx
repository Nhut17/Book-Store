import React from 'react'
const AddressItem = ({ data, index }) => {
    const handleChangeDeliveryAddress = () => {

    }
    return (
        <div className={data.defaultAdd === true ? 'Address-Item defaut-address' : 'Address-Item'} key={index}>
            <div className='up'>
                <span className='name'>{data.name}</span>
                <span className='default'>{data.defaultAdd === true ? 'Địa chỉ mặc định' : ''}</span>
            </div>
            <p className='address'>Địa chỉ: {data.address}</p>
            <p>Điện thoại: {data.contact}</p>
            <p>Lưu ý: {data.deliveryTime}</p>
            <div className='btn-group'>
                <button
                    onClick={handleChangeDeliveryAddress} className={data.defaultAdd === true ? 'active-btn' : ''}>Giao đến địa chỉ này</button>
                <button>Sửa</button>
                {data.defaultAdd === true ? <button>Xóa</button> : ''}

            </div>
        </div>
    )
}
export default AddressItem