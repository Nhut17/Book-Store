import { React, useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.scss';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const LoginForm = ({ setShowLogin }) => {
    const toggle = () => {
        setShowLogin(false)
    }
    return (
        <div >
            <Modal
                open={setShowLogin}
                onClose={toggle}
                centered
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}>
                <div className="main-form">
                    <span className="sign-up">Đăng Nhập</span>
                    <div className="input-group">
                        <div className="input-name">
                            <i class="fa-solid fa-envelope ic"></i>
                            <input type="text" placeholder='Tên của bạn' />
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
                <div className="img">
                    <img src='https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg' alt="" />
                </div>



            </Modal>
            {/* <Modal
                isOpen={setShowLogin}
                toggle={toggle}
                centered
                className='modal-user-container'
            >
                <ModalHeader className='sign-in'>Đăng Nhập</ModalHeader>
                <ModalBody className='form'>
                    <div className="main-form">
                        <div className="input-group">
                            <div className="input-name">
                                <i class="fa-solid fa-envelope ic"></i>
                                <input type="text" placeholder='Tên của bạn' />
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
                    <div className="img">
                        <img src='https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg' alt="" />
                    </div>

                </ModalBody>
            </Modal> */}
        </div >

    )
}

export default LoginForm

        // <form action="">
        //     <div className="btn-close" onClick={onCloseModal}><i class="ic fa-solid fa-xmark"></i></div>
        //     <div className="main-form">
        //         <span className="sign-up">Đăng Nhập</span>


        //         <div className="input-group">
        //             <div className="input-name">
        //                 <i class="fa-solid fa-envelope ic"></i>
        //                 <input type="text" placeholder='Tên của bạn' />
        //             </div>
        //             <div className="input-password">
        //                 <i class="fa-solid fa-lock ic"></i>
        //                 <input type="text" placeholder='Mật Khẩu' />
        //             </div>
        //         </div>




        //         <button className='btn-sign-up'>ĐĂNG NHẬP</button>

        //     </div>
        //     <div className="img">
        //         <img src='https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg' alt="" />
        //     </div>

        //     <div className="login-with">
        //         <span>Đăng nhập với: </span>
        //         <div className="ic-fb ic"><i class="fa-brands fa-facebook-f"></i></div>
        //         <div className="ic-gg ic"><i class="fa-brands fa-google"></i></div>
        //     </div>

        // </form>