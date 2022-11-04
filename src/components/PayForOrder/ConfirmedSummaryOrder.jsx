import React from 'react'
const ConfirmedSummaryOrder = () => {
    return (
        <div className='confirmed-summary-order'>
            <div className='summary-tittle'>TÓM TẮT ĐƠN HÀNG</div>
            <div className='summary-pay'>
                <table width="100%">
                    <tbody>
                    <tr>
                            <td width="60%" align='left'>Tổng tiền hàng</td>
                            <td width="40%" align='right'>638.000 ₫</td>
                        </tr>
                        <tr>
                            <td width="60%" align='left'>Phí giao hàng </td>
                            <td width="40%" align='right'>Miễn phí</td>
                        </tr>
                        <tr>
                            <td width="60%" align='left'>Mã giảm giá</td>
                            <td width="40%" align='right'>0 ₫</td>
                        </tr>
                        <tr>
                            <td width="60%" align='left'>Phí bọc sách</td>
                            <td width="40%" align='right'>9.000 ₫</td>
                        </tr>
                        <tr>
                            <td width="60%" align='left'>Phí gói quà</td>
                            <td width="40%" align='right'>10.000 ₫</td>
                        </tr>
                        <tr>
                            <td width="60%" align='left'>Tạm tính</td>
                            <td width="40%" align='right'>657.000 ₫</td>
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
                        <div className='overall-price'>638.000</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default ConfirmedSummaryOrder