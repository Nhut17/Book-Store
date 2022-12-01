import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/Home/logo.png'

const OrderSuccess = () => {
    return (
        <div className='order-success'>
            <Link to='/' className='header'>
                <img src={logo} alt="" />
            </Link>
            <div className='order-success-content'>
                <img src={`https://media.istockphoto.com/id/1319184864/vector/thank-you-vector-lettering-on-tropical-leaves-background-isolated.jpg?s=612x612&w=0&k=20&c=aqyiCtLdkUON3Gs0tR6PJ2R3tfD5ZERD9uS6Q8FYifE=`} alt="" />
            </div>
            <div className='order-success-direction'>
                <Link to='/' className='header'>
                    Cảm ơn quý khách đã tin tưởng sử dụng dịch vụ của VinaBook
                </Link>
            </div>
            <div className='btn-back-to-home'>
                <Link to='/' className='header'>
                    <button >
                        Quay lại trang chủ
                    </button>
                </Link>

            </div>
        </div>
    )
}
export default OrderSuccess