import React from 'react'
import { useForm } from 'react-hook-form'
import '../../sass/Profile/InfoProfile.scss'
import Breadcrumbs from '../Breadcrumbs'

const GmailOTP = () => {

    const { 
        register,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm()

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

    const sendEmail = () => {

    }

  return (
    <div className='send-mail-otp'>
        
        <div className='container'>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            
            <form onSubmit={handleSubmit(sendEmail)}>
                <            
                <p>Gửi mã xác nhận OTP Email</p>
                <div className='input-group'>
                <span>Gmail: </span>
                <input />
                </div>
            </form>
            
            </div>
    </div>
  )
}

export default GmailOTP
