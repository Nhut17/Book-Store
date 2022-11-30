import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import '../../sass/Profile/InfoProfile.scss'
import Breadcrumbs from '../Breadcrumbs'

const GmailOTP = () => {

    const dispatch = useDispatch()

    const { 
        register,
        handleSubmit,
        formState: { errors },
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

    const sendEmail = (formData) => {
        
    }

  return (
    <div className='send-mail-otp'>
        
        <div className='container'>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            
            <form onSubmit={handleSubmit(sendEmail)}>
                
                <p>Gửi mã xác nhận OTP Email</p>
                <span className='email'>Gmail: </span>
                <div className='input-group'>
               
                
                <input 
                type="text" 
                placeholder='Username của bạn'
                {...register('username',{
                    required: true,
                })} 
                />
                {
                errors.username?.type === 'required' && <span className='err-msg'>Mời bạn nhập email</span>
                }

                <button>Gửi mã</button>
                </div>
                          
            </form>
            
            </div>
    </div>
  )
}

export default GmailOTP
