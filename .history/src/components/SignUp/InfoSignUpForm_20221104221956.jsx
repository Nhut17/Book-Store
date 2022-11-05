import React from 'react'
import { useForm } from 'react-hook-form'
import logo from '../../assets/images/Home/logo.png'

import { Link } from 'react-router-dom'

const InfoSignUpForm = () => {

    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const handleOnSubmit = (formData) => {

    }

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className='main-form'>
       <div className="main-forms">
                <div className='up-modal'>
                    <Link to='/' className='header'>
                        <img src={logo} alt="" />
                    </Link>
                    <span className="sign-up">Đăng Ký</span>
                </div>
                <div className="input-group">
                    <div className="input-username">
                        <i class="fa-solid fa-user ic"></i>
                        <input 
                            type="text" 
                            placeholder='Tên Người Dùng'
                            {...register('username',{
                                required= true
                            })} />
                        {/* <span className='err-msg'>Mời bạn nhập email</span> */}
                    </div>
                    <div className="input-phone">
                        <i class="fa-solid fa-phone ic"></i>
                        <input type="text" placeholder='Số Điện Thoại' />
                    </div>
                    <div className="input-email">
                        <i class="fa-solid fa-envelope ic"></i>
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="input-password">
                        <i class="fa-solid fa-lock ic"></i>
                        <input type="text" placeholder='Mật Khẩu' />
                    </div>
                    <div className="input-repeat-password">
                        <i class="fa-solid fa-lock ic ic-repeat-pass"></i>
                        <input type="text" placeholder='Nhập Lại Mật Khẩu' />
                    </div>
                </div>

                <div className="policy">
                    <input type="checkbox" />
                    <span>Tôi đồng ý với <u>Dịch vụ chính sách</u> </span>
                </div>

                <button className='btn-sign-up'>ĐĂNG KÝ</button>
                <div className="login-with">
                    <span>Đăng nhập với: </span>
                    <div className="ic-fb ic"><i class="fa-brands fa-facebook-f"></i></div>
                    <div className="ic-gg ic"><i class="fa-brands fa-google"></i></div>
                </div>
            </div>

    </form>
  )
}

export default InfoSignUpForm
