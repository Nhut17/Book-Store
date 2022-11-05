import React from 'react'
import Address from './Address'
import RelativeService from './RelativeService'
const AddressAndServices = ({ data }) => {
    return (
        <div className='address-and-services'>
            <div className='content'>
                <div className='aas-title'>địa chỉ và dịch vụ</div>
                <div className='aas-content'>
                    <Address />
                    <RelativeService data={data} />
                </div>
            </div>

        </div>
    )
}
export default AddressAndServices