import { React } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import './SignUpForm.scss'
import logo from '../../assets/images/Home/logo.png'
const SignUpForm = ({ setShowSignUp }) => {
    const toggle = () => {
        console.log('checkk signup')
        setShowSignUp(false)
    }
    return (
        <Modal
            open={true}
            onClose={toggle}
            center
            classNames={{
                overlay: 'customOverlay',
                modal: 'customModal_signup',
            }}>
            <div className="main-form">
                <div className='up-modal'>
                    <Link to='/' className='header'>
                        <img src={logo} alt="" />
                    </Link>
                    <span className="sign-up">Đăng Ký</span>
                </div>
                <div className="input-group">
                    <div className="input-username">
                        <i className="fa-solid fa-user ic"></i>
                        <input type="text" placeholder='Tên Người Dùng' />
                    </div>
                    <div className="input-phone">
                        <i className="fa-solid fa-phone ic"></i>
                        <input type="text" placeholder='Số Điện Thoại' />
                    </div>
                    <div className="input-email">
                        <i className="fa-solid fa-envelope ic"></i>
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="input-password">
                        <i className="fa-solid fa-lock ic"></i>
                        <input type="text" placeholder='Mật Khẩu' />
                    </div>
                    <div className="input-repeat-password">
                        <i className="fa-solid fa-lock ic ic-repeat-pass"></i>
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
                    <div className="ic-fb ic"><i className="fa-brands fa-facebook-f"></i></div>
                    <div className="ic-gg ic"><i className="fa-brands fa-google"></i></div>
                </div>
            </div>
            <div className="img">
                <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="" />
            </div>
        </Modal>
    )
}
export default SignUpForm;





{/* <div className='body'>
                        <div className="main-form">
                            <span className="sign-up">Đăng Ký</span>
                            <div className="input-group">
                                <div className="input-username">
                                    <i className="fa-solid fa-user ic"></i>
                                    <input type="text" placeholder='Tên Người Dùng' />
                                </div>
                                <div className="input-phone">
                                    <i className="fa-solid fa-phone ic"></i>
                                    <input type="text" placeholder='Số Điện Thoại' />
                                </div>
                                <div className="input-email">
                                    <i className="fa-solid fa-envelope ic"></i>
                                    <input type="email" placeholder='Email' />
                                </div>
                                <div className="input-password">
                                    <i className="fa-solid fa-lock ic"></i>
                                    <input type="text" placeholder='Mật Khẩu' />
                                </div>
                                <div className="input-repeat-password">
                                    <i className="fa-solid fa-lock ic ic-repeat-pass"></i>
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
                                <div className="ic-fb ic"><i className="fa-brands fa-facebook-f"></i></div>
                                <div className="ic-gg ic"><i className="fa-brands fa-google"></i></div>
                            </div>
                        </div>
                        <div className="img">
                            <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="" />
                        </div>
                    </div> */}
{/* </div> */ }