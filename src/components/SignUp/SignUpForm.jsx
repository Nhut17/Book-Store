import { React } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import './SignUpForm.scss'
import logo from '../../assets/images/Home/logo.png'
const SignUpForm = ({ setShowSignUp }) => {
    console.log('wbweubfweub')
    const toggle = () => {
        console.log('checkk signup')
        setShowSignUp(false)
    }
    return (
        <div >
            <Modal
                open={setShowSignUp}
                onClose={toggle}
                centered
                classNames={{
                    overlay: 'customOverlay_signup',
                    modal: 'customModal_signup',
                    
                }}>
                <div className='modal-sign-up-container'>
                    <Link to='/' className='header'>
                        <img src={logo} alt="" />
                    </Link>
                    <div className='body'>
                        {/* <div className="container"> */}
                            <div className="main-form">
                                <span className="sign-up">Đăng Ký</span>
                                <div className="input-group">
                                    <div className="input-username">
                                        <i class="fa-solid fa-user ic"></i>
                                        <input type="text" placeholder='Tên Người Dùng' />
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
                            <div className="img">
                                <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </Modal>
        </div>
    )
}
export default SignUpForm;