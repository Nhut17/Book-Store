import React from 'react'
import '../../sass/Profile/InfoProfile.scss'
import Breadcrumbs from '../Breadcrumbs'

const ChangPassword = () => {
    const breadcrumbs = [
        {
            direct: 'Trang chủ',
            path:'/'
        },
        {   
            direct: 'Thông tin cá nhân',
            path: '/profile'
        },
        {   
            direct: 'Gửi OTP Email',
            path: '/profile/sendEmailOTP'
        },
        {   
            direct: 'Thay đổi mật khẩu',
            path: ''
        },
    ]

  return (
    <div className='change-password'>

        <div className='container'>

                <form>

                </form>
        </div>
      
    </div>
  )
}

export default ChangPassword
