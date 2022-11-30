import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { resetSuccessSendOTP, sendOTP } from '../../redux/reducer/userSlice'
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

    useEffect(() => {
        dispatch(resetSuccessSendOTP())
    },[])

    const sendEmail = (formData) => {
        const { email } = formData
           dispatch(sendOTP(email))
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
                placeholder='Email'
                {...register('email',{
                    required: true,
                    pattern: {
                        message: 'Email bạn nhập sai. Xin mời nhập lại!',
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        
                    }
                })} />
                {
                errors.email?.type === 'required' && <span className='err-msg'>Mời bạn nhập email</span>
                }
                {
                errors.email?.type === 'pattern' && <span className="err-msg">{errors.email?.message}</span>
                }

                <button>Gửi mã</button>
                </div>
                          
            </form>
            
            </div>
    </div>
  )
}

export default GmailOTP
