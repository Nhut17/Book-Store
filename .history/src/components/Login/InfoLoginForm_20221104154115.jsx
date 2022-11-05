import React from 'react'
import { useForm } from 'react-hook-form'



const InfoLoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
     } = useForm()

  return (
    <form action="" className='main-form'>

    <div className="main-forms">
        <span className="sign-in">Đăng Nhập</span>
        <div className="input-group">
            <div className="input-name">
                <i class="fa-solid fa-envelope ic"></i>
                <input 
                    type="text" 
                    placeholder='Email của bạn'
                    {...register('email',{
                        required: true,
                        pattern: {
                            message: 'Email sai',
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        }
                    })} />
                    {
                    errors.email?.type === 'required' && <span className='err-msg'>Email is valid</span>
                    }
                    {
                    errors.email?.type === 'pattern' && <span className="err-msg">{errors.email?.message}</span>
        }
            </div>
            <div className="input-password">
                <i class="fa-solid fa-lock ic"></i>
                <input type="text" placeholder='Mật Khẩu' />
            </div>
        </div>
        <button className='btn-sign-in'>ĐĂNG NHẬP</button>
        <div className="login-with">
            <span>Đăng nhập với: </span>
            <div className="ic-fb ic"><i class="fa-brands fa-facebook-f"></i></div>
            <div className="ic-gg ic"><i class="fa-brands fa-google"></i></div>
        </div>
    </div>
        </form>
  )
}

export default InfoLoginForm
