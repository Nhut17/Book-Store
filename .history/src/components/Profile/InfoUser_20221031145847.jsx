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
        <div className="name">
            <span>Họ và Tên</span>
            <input type="text" />
        </div>
        <div className="mail">
            <span>Email</span>
            <input type="text" />
        </div>
        <div className="password">
            <span>Mata</span>
            <input type="text" />
        </div>
        <div className="name">
            <span>Họ và Tên</span>
            <input type="text" />
        </div>
        <div className="name">
            <span>Họ và Tên</span>
            <input type="text" />
        </div>
    </div>
</form>
  )
}

export default InfoUser