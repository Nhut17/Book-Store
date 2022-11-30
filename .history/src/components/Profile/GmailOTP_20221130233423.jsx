
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetSuccessSendOTP, sendOTP } from '../../redux/reducer/userSlice'
// import '../../sass/Profile/InfoProfile.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GmailOTP = () => {

    const dispatch = useDispatch()
    const { successSendOTP } = useSelector(state => state.user)
    const navigate = useNavigate()

    const { 
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

   

   

    const sendEmail = (formData) => {
        const { email } = formData
        dispatch(sendOTP(email))
        toast.success('Gửi mã OTP thành công ',
        {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
    }

  return (
    <div className='send-mail-otp'>
    <ToastContainer />
        
        <div className='container'>
            
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
