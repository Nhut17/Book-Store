import { faMinus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
const SummaryOrder = ({ count, totalPrice }) => {
    let total = totalPrice >= 250000 ? totalPrice : totalPrice + 15000
    return (
        <div className='summary-order'>
            <div className='summary-tittle'>TÓM TẮT ĐƠN HÀNG</div>
            <div className='summary-pay'>
                <table width="100%">
                    <tbody>
                        <tr>
                            <td width="60%" align='left'>Sản phẩm</td>
                            <td width="40%" align='right'>{count}</td>
                        </tr>
                        <tr>
                            <td width="60%" align='left'>Phí vận chuyển</td>
                            <td width="40%" align='right'>{totalPrice >= 250000 ? 'Miễn phí' : '15.000₫'}</td>
                        </tr>
                        <tr>
                            <td width="60%" align='left'>Tạm tính</td>
                            <td width="40%" align='right'>{totalPrice?.toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                <span className='currency'>&#8363;</span></td>
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
                        <div className='overall-price'>{total?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            <span className='currency'>&#8363;</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SummaryOrder