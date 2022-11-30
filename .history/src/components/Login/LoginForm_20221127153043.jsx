import { React, useState } from 'react';
import './LoginForm.scss';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useForm } from 'react-hook-form';
import InfoLoginForm from './InfoLoginForm';

const LoginForm = ({ setShowLogin }) => {

    const { } = useForm()

    const toggle = () => {
        setShowLogin(false)
    }
    return (
        <div className='modal-login' >
        <ToastContainer />
            <Modal
                open={setShowLogin}
                onClose={toggle}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal_login',
                }}>

                    
                <InfoLoginForm setShowLogin={setShowLogin} />
                <div className="img">
                    <img src='https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg' alt="" />
                </div>
            </Modal>
        </div >

    )
}

export default LoginForm

