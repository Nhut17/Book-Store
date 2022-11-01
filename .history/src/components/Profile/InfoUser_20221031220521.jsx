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
        <div className="name m">
            <span>Họ và Tên</span>
            <input type="text" />
        </div>
        <div className="mail m">
            <span>Email</span>
            <input type="text" />
        </div>
        <div className="password m">
            <span>Mật khẩu</span>
            <input type="text" />
        </div>
        <div className="re-password m">
            <span>Nhập lại mật khẩu</span>
            <input type="text" />
        </div>
        <div className="birthday m">
            <span>Ngày sinh</span>
            <input type="text" />
        </div>
        <div className="gender m">
            <span>Giới tính</span>
            <input type="radio" />
            <input type="radio" />
        </div>
    </div>
</form>
  )
}

export default InfoUser