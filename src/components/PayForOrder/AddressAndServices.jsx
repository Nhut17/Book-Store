import { React, useState } from 'react';

import Address from './Address'
import RelativeService from './RelativeService'
import { userAddresses } from '../data'
import ConfirmAddress from './ConfirmAddress'
const AddressAndServices = ({ data }) => {

    return (
        <div className='address-and-services'>
            <div className='content'>
                <div className='aas-title'>địa chỉ và dịch vụ</div>
                <div className='aas-content'>
                    {userAddresses && userAddresses?.length > 0 ?

                        <ConfirmAddress selectedAddress={userAddresses[0]}/> :
                        <Address />
                    }

                    {/* <Address /> */}
                    <RelativeService data={data} />
                </div>
            </div>
        </div>
    )
}
export default AddressAndServices