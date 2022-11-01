import React from 'react'
import { useForm } from "react-hook-form";



const InfoUser = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const handleOnSubmit = () => {

    }

  return (
    <form  onSubmit={handleSubmit(handleOnSubmit)}>
    <div className="input-group">
        <div className="name mg">
            <span className=''>Họ và Tên</span>
            <input type="text" className='inpt'/>
        </div>
        <div className="mail mg">
            <span>Email</span>
            <input type="text" className='inpt'/>
        </div>
        <div className="password mg">
            <span>Mật khẩu</span>
            <input type="text" className='inpt'/>
        </div>
        <div className="re-password mg">
            <span>Nhập lại mật khẩu</span>
            <input type="text" className='inpt'/>
        </div>
        <div className="birthday mg">
            <span>Ngày sinh</span>
            <input type="date" className='inpt'/>
        </div>
        <div className="gender mg">
            <span>Giới tính</span>
            <div className="radio-group">
                <div className="male">
            <input type="radio" />
            <label >Nam</label>
                </div>
                <div className="female">
            <input type="radio" />
            <label >Nữ</label>
                </div>
            </div>
        </div>
    </div>
</form>
  )
}

export default InfoUser