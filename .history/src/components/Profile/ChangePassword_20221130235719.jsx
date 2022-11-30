import React from 'react'
import { useForm } from 'react-hook-form'
import '../../sass/Profile/InfoProfile.scss'

const ChangPassword = () => {
    
    const { 
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm()

  return (
    <div className='change-password'>

        <div className='container'>

       
                <form>

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
                        <input />
                    </div>
                    <div className='new-password input-group'>
                        <span>Nhập mật khẩu mới: </span>
                        <input 
                        type="password" 
                        placeholder='Mật Khẩu'
                        {...register('password',{
                            required: true,
                            minLength: 6,
                        })}  />
                        {
                        errors.password?.type === 'required' && <span className='err-msg'>Mời bạn nhập mật khẩu</span>
                        }
                        {
                        errors.password?.type === 'minLength' && <span className='err-msg'>Mật khẩu có tối đa ít nhất 6 kí tự</span>
                        }
                    </div>
                    <div className='re-password input-group'>
                        <span>Nhập lại mật khẩu: </span>
                        <input />
                    </div>

                    <button>LƯU</button>

                </form>
        </div>
      
    </div>
  )
}

export default ChangPassword
