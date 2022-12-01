
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
        
       

    </div>
  )
}

export default GmailOTP
