import React,{useState,useContext} from 'react'
import LoginForm from '../components/Login/LoginForm'
import '../sass/Login/login.scss'



const Login = ({setShowLogin}) => {





  return (
    <div className="login">

          <LoginForm setShowLogin={setShowLogin} />
    </div>
  )
}

export default Login