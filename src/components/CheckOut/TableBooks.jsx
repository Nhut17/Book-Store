
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom'

import ReceiptItem from './ReceiptItem';
import SummaryOrder from './SummaryOrder'
import { Loading } from "../../HOCs/Loading";
const TableBooks = ({ listCart, loading }) => {

    const totalPrice = useSelector(state => state.cart.totalPrice)
    const totalProduct = useSelector(state => state.cart.totalProduct)

    const navigate = useNavigate()
 

    return (
        <div className='list-main-product' >
            <div className='content-checkout'>
                <div className='detail-checkout'
                    style={
                        listCart.length > 3 ? {
                            overflowY: 'scroll',
                        } : {}
                    }  >
                    <div className='title-product'>SẢN PHẨM</div>
                    {
                        listCart.map((data, index) => (
                            <ReceiptItem index={index} data={data}
                            />
                        ))
                    }
                </div>

                <div className='summary-content'>
                    <SummaryOrder count={totalProduct} totalPrice={totalPrice} />
                    <div className='button-group'>
                        <Link to='/pay-for-order'>
                            <button className='btn thanh-toan'>Thanh toán</button>
                        </Link>
                        <button className='btn quay-lai' onClick={() => navigate('/')}>Quay lại</button>
                    </div>
                </div>

            </div>



        </div>
    )
}
export default TableBooks