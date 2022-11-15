import React , {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/reducer/userSlice'
import { Link } from 'react-router-dom'

const InfoLoginForm = ({setShowLogin}) => {

    const state = useSelector(state => state.user)
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors }
     } = useForm()
     
     useEffect(() => {

        if(state.completed)
        {
            setShowLogin(state.loading)
        }

     },[state.user])

     const handleOnSubmit = (data) => {
            console.log('Form data: '+ JSON.stringify(data))
            dispatch(loginUser(data))
                .unwrap
            
     }

  return (
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
                    {
                        state.message === 'failed' && <span className='err-msg'>Sai tài khoản hoặc mật khẩu</span>
                    }
            </div>
        </div>
        <button className='btn-sign-in' >ĐĂNG NHẬP</button>
        <div className="login-with">
            <span>Đăng nhập với: </span>
            <div className="ic-fb ic"><i class="fa-brands fa-facebook-f"></i></div>
            <div className="ic-gg ic"><i class="fa-brands fa-google"></i></div>
        </div>
    </div>
        </form>
  )
}

export default InfoLoginForm