
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ReceiptItem from './ReceiptItem';
import SummaryOrder from './SummaryOrder'
import 
const TableBooks = ({ listCart }) => {
    
    const totalPrice = useSelector(state => state.cart.totalPrice)
    console.log(totalPrice)

   

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