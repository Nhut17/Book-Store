import React from 'react'
import { Steps } from 'antd';
// import 'antd/dist/antd.css';
const { Step } = Steps;

const StepToPay = ({step}) => {
    return (
        <div className='step-to-pay-container'>
           <Steps size="small" current={step}>
                <Step title="Địa chỉ & Dịch vụ" />
                <Step title="Hình thức thanh toán" />
                <Step title="Xác nhận & Đặt hàng" />
            </Steps>
        </div>

    )
}
export default StepToPay