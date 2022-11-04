import React from 'react'
import { useForm } from "react-hook-form";

const {
    register,

} = useForm()

const InfoUser = () => {
  return (
    <form action="">
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
            <span>Họ và Tên</span>
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