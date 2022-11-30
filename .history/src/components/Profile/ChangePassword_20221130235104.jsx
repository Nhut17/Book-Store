import React from 'react'
import { useForm } from 'react-hook-form'
import '../../sass/Profile/InfoProfile.scss'

const ChangPassword = () => {
    
    const { 
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

  return (
    <div className='change-password'>

        <div className='container'>

       
                <form>

                    <p>Thay Đổi Mật Khẩu</p>
                    <div className='email input-group'>
                        <span>Email: </span>
                        <input />
                    </div>
                    <div className='otp input-group'>
                        <span>Mã otp: </span>
                        <input />
                    </div>
                    <div className='new-password input-group'>
                        <span>Nhập mật khẩu mới: </span>
                        <input />
                    </div>
                    <div className='re-password input-group'>
                        <span>Nhập lại mật khẩu: </span>
                        <input />
                    </div>

                    <button>LƯU</button>

                </form>
        </div>
      
    </div>
  )
}

export default ChangPassword
