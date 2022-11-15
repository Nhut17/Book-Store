import { React, useEffect, useState } from 'react';

// import { userAddresses } from '../data'
import ConfirmAddress from './ConfirmAddress'
import PaymentInfor from './PaymentInfor';
import { useDispatch, useSelector } from 'react-redux';

import { getAllAddresses } from '../../redux/reducer/addressSlice';

const AddressAndServices = ({payment,setPayment}) => {

    const listAddress = useSelector(state => state.address.listAddress)
    let defaultAddress = listAddress.find(item => item.add_default === true)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllAddresses())
    }, [])
    return (
        <div className='address-and-services'>
            <div className='content'>
                <div className='aas-title'>địa chỉ và dịch vụ</div>
                <div className='aas-content'>
                    <ConfirmAddress selectedAddress={defaultAddress} />
                    <PaymentInfor payment={payment} setPayment={setPayment}/>
                </div>
            </div>
        </div>
    )
}
export default AddressAndServices