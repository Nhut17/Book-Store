
import React, { useState } from "react";

import ReceiptItem from './ReceiptItem';
import SummaryOrder from './SummaryOrder'
const TableBooks = ({ listCart }) => {
    const [totalPrice, setTotalPrice] = useState(listCart.reduce((acc, val) => {
        return acc + (val.quantity * val.price)
    }, 0))
    // console.log('check list product', list_product)
    return (
        <div className='list-main-product' >
            <div className='content-checkout'>
                <div className='detail-checkout'>
                    <div className='title-product'>SẢN PHẨM</div>
                    {
                        listCart.map((data, index) => (
                            <ReceiptItem index={index} data={data}
                            />
                        ))
                    }
                </div>

                <div className='summary-content'>
                    <SummaryOrder count={listCart.length} totalPrice={totalPrice} />
                </div>

            </div>

        </div>
    )
}
export default TableBooks