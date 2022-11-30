import React , {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, resetSuccess } from '../../redux/reducer/userSlice'
import { Link , useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const InfoLoginForm = ({setShowLogin}) => {

    const {user,successLogin,message} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
     } = useForm()
     
     useEffect(() => {

        if(user)
        {
            setShowLogin(false)
            if(user.roles[0]?.authority === 'USER')
            {
                navigate('/')
            } 
            if (user?.roles[0]?.authority === 'ADMIN')
            {
                navigate('/admin')
            }
           
        }

     },[user])

     useEffect(() => {
        dispatch(resetSuccess())
     },[])

     const handleOnSubmit = (data) => {
            dispatch(loginUser(data))
         
     }

  return (
    <>
    <ToastContainer />
    <form onSubmit={handleSubmit(handleOnSubmit)} className='main-form'>

    <div className="main-forms">
        <span className="sign-in">Đăng Nhập</span>
        <div className="input-group">
            <div className="input-name">
                <i class="fa-solid fa-envelope ic"></i>
                <input 
                    type="text" 
                    placeholder='Username của bạn'
                    {...register('username',{
                        required: true,
                    })} 
                    />
                    {
                    errors.username?.type === 'required' && <span className='err-msg'>Mời bạn nhập email</span>
                    }
                    
                
                    
            </div>
            <div className="input-password">
                <i class="fa-solid fa-lock ic"></i>
                <input 
                    type="password" 
                    placeholder='Mật Khẩu'
                    {...register('password',{
                        required: true,
                    })} />
                    {
                        errors.password?.type === 'required' && <span className='err-msg'>Mời bạn nhập mật khẩu</span>
                    }
                    
            </div>
        </div>

        <Link to='/sendEmailOTP' reloadDocument>
            <span style={{
                display: 'block',
                textDecoration: 'underline',
                cursor: 'pointer',
                color: '#FF7000',
            }}>Quên mật khẩu</span>
        </Link>

        <button className='btn-sign-in' >ĐĂNG NHẬP</button>
           {
            successLogin === false && <span className='err-msg' style={{paddingTop: 0}} >{message}</span>
            } 
        <div className="login-with">
            <span>Đăng nhập với: </span>
            <div className="ic-fb ic"><i class="fa-brands fa-facebook-f"></i></div>
            <div className="ic-gg ic"><i class="fa-brands fa-google"></i></div>
        </div>
    </div>
        </form>
    </>

  )
}

export default InfoLoginForm
