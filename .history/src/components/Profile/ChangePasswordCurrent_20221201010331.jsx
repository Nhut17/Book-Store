import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changePassword } from '../../redux/reducer/userSlice'

const ChangePasswordCurrent = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { 
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm()
    const onChangePassword = (formData) => {
        dispatch(changePassword(formData))
    }

  return (
    <div className='change-password-current'>
      
        <div className='container'>
        <form onSubmit={handleSubmit(onChangePassword)}>

        <p>Thay Đổi Mật Khẩu</p>
        <div className='email input-group'>
            <span>Mật khẩu hiện tại: </span>
            <input 
            type="password" 
            placeholder='Mật Khẩu mới'
            {...register('password',{
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

export default ChangePasswordCurrent
