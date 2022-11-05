import { React } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import './SignUpForm.scss'
import InfoSignUpForm from './InfoSignUpForm';
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


            <InfoSignUpForm />

            <div className="img">
                <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="" />
            </div>
        </Modal>
    )
}
export default SignUpForm;





