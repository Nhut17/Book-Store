import React from 'react'
import '../sass/SignUp/signUp.scss'
import SignUpForm from '../components/SignUp/SignUpForm'

const SignUp = ({ setShowSignUp }) => {
    console.log('signUp check')

    return (
        <SignUpForm setShowSignUp={setShowSignUp} />
    )
}

export default SignUp
