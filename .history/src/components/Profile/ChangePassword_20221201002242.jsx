import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changePassword } from '../../redux/reducer/userSlice'
import '../../sass/Profile/InfoProfile.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ChangPassword = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { successChangePassword } = useSelector(state => state.user)


    const { 
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm()

    useEffect(() => {

        if(successChangePassword)
        {
            setTimeout(() => {
                navigate('/changePassword')
            },2000)
            
        }
        dispatch(resetSuccessSendOTP())
    },[successChangePassword])

    const onChangePassword = (formData) => {
        dispatch(changePassword(formData))
    }

  return (
    <div className='change-password'>
    <ToastContainer />

        <div className='container'>

       
                <form onSubmit={handleSubmit(onChangePassword)}>

                    <p>Thay Đổi Mật Khẩu</p>
                    <div className='email input-group'>
                        <span>Email: </span>
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
                    </div>
                    <div className='otp input-group'>
                        <span>Mã otp: </span>
                        <input
                        placeholder='OTP'
                        {...register('otp',{
                            required: true,
                        })}
                        
                        />
                        {
                            errors.otp?.type === 'required' && <span className='err-msg'>Mời bạn nhập mã OTP</span>
                            }
                    </div>
                    <div className='new-password input-group'>
                        <span>Nhập mật khẩu mới: </span>
                        <input 
                        type="password" 
                        placeholder='Mật Khẩu mới'
                        {...register('newPassword',{
                            required: true,
                            minLength: 6,
                        })}  />
                        {
                        errors.newPassword?.type === 'required' && <span className='err-msg'>Mời bạn nhập mật khẩu</span>
                        }
                        {
                        errors.newPassword?.type === 'minLength' && <span className='err-msg'>Mật khẩu có tối đa ít nhất 6 kí tự</span>
                        }
                    </div>
                    <div className='re-password input-group'>
                        <span>Nhập lại mật khẩu: </span>
                        <input 
                            type="password" 
                            placeholder='Nhập Lại Mật Khẩu'
                            {...register('rePassword',{
                                required: true,
                                validate: (value) => {
                                    const password = getValues('newPassword')
                                    if(value !== password) {
                                        return 'Nhập lại mật khẩu không đúng!'
                                    }
                                }
                            })}  />
                             {
                                errors.rePassword?.type === 'required' && <span className='err-msg'>Mời bạn nhập lại mật khẩu</span>
                            }
                             {
                                errors.rePassword  && <span className='err-msg'>{errors.rePassword.message}</span>
                            }
                    </div>

                    <button>LƯU</button>

                </form>
        </div>
      
    </div>
  )
}

export default ChangPassword
