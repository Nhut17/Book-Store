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
            <span>Họ và Tên</span>
            <input type="text" />
        </div>
        <div className="mail mg">
            <span>Email</span>
            <input type="text" />
        </div>
        <div className="password mg">
            <span>Mật khẩu</span>
            <input type="text" />
        </div>
        <div className="re-password mg">
            <span>Nhập lại mật khẩu</span>
            <input type="text" />
        </div>
        <div className="birthday mg-10">
            <span>Ngày sinh</span>
            <input type="text" />
        </div>
        <div className="gender mg-10">
            <span>Giới tính</span>
            <input type="radio" />
            <input type="radio" />
        </div>
    </div>
</form>
  )
}

export default InfoUser