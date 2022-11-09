import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import logo from '../../assets/images/Home/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../redux/reducer/userSlice'
const InfoSignUpForm = ({setShowSignUp}) => {

    const { 
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector(state => state.user)

    useEffect(() => {
        console.log(state.message)
    },[])

    // Post api register
    const handleOnSubmit = (formData) => {
        const data = {
            ...formData,
            roles: ['USER']
        }
        dispatch(registerUser(data))
            .unwrap()
            .then(() => navigate('/'))
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
                    <div className="input-name">
                        <i class="fa-solid fa-user ic"></i>
                        <input 
                            type="text" 
                            placeholder='Họ Tên'
                            {...register('name',{
                                required: true,
                                
                            })} />
                            {
                                errors.name?.type === 'required' &&
                                 <span className='err-msg'>Mời bạn nhập họ tên</span> 
                            }
                        
                    </div>
                    <div className="input-username">
                        <i class="fa-solid fa-user ic"></i>
                        <input 
                            type="text" 
                            placeholder='Tên Người Dùng'
                            {...register('username',{
                                required: true,
                                
                            })} />
                            {
                                errors.username?.type === 'required' &&
                                 <span className='err-msg'>Mời bạn nhập Username</span> 
                            }
                        
                    </div>
                    <div className="input-phone">
                        <i class="fa-solid fa-phone ic"></i>
                        <input 
                            type="text" 
                            placeholder='Số Điện Thoại'
                            {...register('phonenumber',{
                                required: true,
                            })} />
                            {
                                errors.phonenumber?.type === 'required' &&
                                 <span className='err-msg'>Mời bạn nhập Số điện thoại</span> 
                            }
                    </div>
                    <div className="input-email">
                        <i class="fa-solid fa-envelope ic"></i>
                        <input 
                            type="email" 
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
                    <div className="input-password">
                        <i class="fa-solid fa-lock ic"></i>
                        <input 
                            type="password" 
                            placeholder='Mật Khẩu'
                            {...register('password',{
                                required: true,
                            })}  />
                            {
                            errors.password?.type === 'required' && <span className='err-msg'>Mời bạn nhập mật khẩu</span>
                            }
                    </div>
                    <div className="input-repeat-password">
                        <i class="fa-solid fa-lock ic ic-repeat-pass"></i>
                        <input 
                            type="password" 
                            placeholder='Nhập Lại Mật Khẩu'
                            {...register('password',{
                                required: true,
                                validate: (value) => {
                                    const password = getValues('password')
                                    if(value !== password) {
                                        return 'Nhập lại mật khẩu không đúng!'
                                    }
                                }
                            })}  />
                             {
                            errors.password?.type === 'required' && <span className='err-msg'>Mời bạn nhập lại mật khẩu</span>
                            }
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
