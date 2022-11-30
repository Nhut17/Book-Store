import React from 'react'
import '../../sass/Profile/InfoProfile.scss'
import Breadcrumbs from '../Breadcrumbs'

const GmailOTP = () => {

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
            path: ''
        },
    ]

  return (
    <div className='send-mail-otp'>
        
        <div className='container'>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            
            <form>
                <p></p>
            </form>
            
            </div>
    </div>
  )
}

export default GmailOTP
