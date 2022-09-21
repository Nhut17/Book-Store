import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/SignIn/signIn.scss'
import logo from '../assets/images/Home/logo.png'
// import login from '../../assets/images/login.png'

const SignIn = () => {
  return (
    <div className='login'>
         <div className="header-signIn">
           <div className="container">
           <div className="logo">
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
            </div>
            <span>ĐĂNG NHẬP</span>
           </div>
        </div>

        <div className='login-form'>
        <div className="container">
            <form action="">
                <div className="main-form">
                    <span className="sign-up">Đăng Nhập</span>

    
                    <div className="input-group">
                        <div className="input-name">
                            <i class="fa-solid fa-envelope ic"></i>
                            <input type="text" placeholder='Tên của bạn'/>
                        </div>
                        <div className="input-password">
                            <i class="fa-solid fa-lock ic"></i>
                            <input type="text" placeholder='Mật Khẩu' />
                        </div>
                    </div>
                   
                    
                   

                    <button className='btn-sign-up'>ĐĂNG NHẬP</button>

                </div>
                <div className="img">
                    <img src='https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg' alt="" />
                </div>
                
            </form>
        </div> 
    </div>

    </div>
  )
}

export default SignIn
