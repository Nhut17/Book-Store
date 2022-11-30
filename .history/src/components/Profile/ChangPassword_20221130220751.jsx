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
            direct: 'Gửi OTP Email',
            path: ''
        },
    ]

  return (
    <div className='change-password'>

        <div className='container'>

        <Breadcrumbs breadcrumbs={breadcrumbs} />
                <form>

                </form>
        </div>
      
    </div>
  )
}

export default ChangPassword
