import { faMinus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
const SummaryOrder = ({ count }) => {
    return (
        <div className='summary-order'>
            <div className='summary-tittle'>TÓM TẮT ĐƠN HÀNG</div>
            <div className='summary-pay'>
                <table width="100%">
                    <tbody>
                        <tr>
                            <td width="60%" align='left'>Sản phẩm</td>
                            <td width="40%" align='right'>3</td>
                        </tr>
                        <tr>
                            <td width="60%" align='left'>Phí vận chuyển</td>
                            <td width="40%" align='right'>Miễn phí</td>
                        </tr>
                        <tr>
                            <td width="60%" align='left'>Tạm tính</td>
                            <td width="40%" align='right'>638.000</td>
                        </tr>
                        <tr>
                            <td colSpan='2' ><span className='more-infor'>(Đã bao gồm Thuế VAT và Phí đóng gói cơ bản).</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SummaryOrder