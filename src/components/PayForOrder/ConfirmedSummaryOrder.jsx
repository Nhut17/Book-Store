import React, { useState } from 'react'

const ConfirmedSummaryOrder = ({ totalPrice }) => {
    let total = totalPrice >= 229000 ? totalPrice : totalPrice + 15000

    return (
        <div className='confirmed-summary-order'>
            <div className='summary-tittle'>TÓM TẮT ĐƠN HÀNG</div>
            <div className='summary-pay'>
                <table width="100%">
                    <tbody>
                        <tr>
                            <td width="60%" align='left'>Tổng tiền hàng</td>
                            <td width="40%" align='right'>{totalPrice.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₫</td>
                        </tr>
                        <tr>
                            <td width="60%" align='left'>Phí giao hàng </td>
                            <td width="40%" align='right'>{totalPrice >= 229000 ? 'Miễn phí' : '15.000₫'}</td>
                        </tr>
                        <tr>
                            <td width="60%" align='left'>Tạm tính</td>
                            <td width="40%" align='right'>{total.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ₫</td>
                        </tr>
                        <tr>
                            <td colSpan='2' ><div className='more-infor'><br></br>(Đã bao gồm Thuế VAT và Phí đóng gói cơ bản).</div></td>
                        </tr>
                    </tbody>
                </table>
                <div className='overall'>
                    <hr></hr>
                    <div className='result'>
                        <div className='overall-title'>Tổng cộng</div>
                        <div className='overall-price'>{total.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}₫</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default ConfirmedSummaryOrder