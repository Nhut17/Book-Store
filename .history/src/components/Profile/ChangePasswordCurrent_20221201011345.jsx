import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  changePasswordCurrent, resetSuccessChangePasswordCurrent } from '../../redux/reducer/userSlice'
import '../../sass/Profile/InfoProfile.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePasswordCurrent = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { successChangePasswordCurrent } = useSelector(state => state.user)

    const { 
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm()
    const onChangePassword = (formData) => {
        dispatch(changePasswordCurrent(formData))
    }

    useEffect(() => {

        if(successChangePasswordCurrent)
        {
            toast.success('Thay đổi mật khẩu thành công ',
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
           const back = setTimeout(() => {
                navigate('/')
            },2000)

            clear
            
        }
        dispatch(resetSuccessChangePasswordCurrent())
    },[successChangePasswordCurrent])

  return (
    <div className='change-password-current'>
      
        <div className='container'>
        <form onSubmit={handleSubmit(onChangePassword)}>

        <p>Thay Đổi Mật Khẩu</p>
        <div className='password-current input-group'>
            <span>Mật khẩu hiện tại: </span>
            <input 
            type="password" 
            {...register('curPassword',{
                required: true,
                minLength: 6,
            })}  />
            {
            errors.curPassword?.type === 'required' && <span className='err-msg'>Mời bạn nhập mật khẩu</span>
            }
            {
            errors.curPassword?.type === 'minLength' && <span className='err-msg'>Mật khẩu có tối đa ít nhất 6 kí tự</span>
            }
        </div>
        <div className='new-password input-group'>
            <span>Nhập mật khẩu mới: </span>
            <input 
            type="password" 
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

export default ChangePasswordCurrent
