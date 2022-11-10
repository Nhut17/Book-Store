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
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="input-group">
                <div className=' input-common input-name'>
                    <label>Họ và tên</label>
                    <input type="text" placeholder='Họ và tên'></input>
                </div>
                <div className='input-common input-email'>
                    <label>Email</label>
                    <input type="text" placeholder='Email'></input>
                </div>
                <div className='input-common input-password'>
                    <label>Mật khẩu</label>
                    <input type="text" placeholder='Mật khẩu'></input>
                </div>
                <div className='input-common input-re-password'>
                    <label>Nhập lại mật khẩu</label>
                    <input type="text" placeholder='Nhập lại mật khẩu'></input>
                </div>
                <div className="input-common input-dob">
                    <label>Ngày sinh</label>
                    <input type="date" className='inpt' />
                </div>
            </div>
            <div className="gender mg">
                <label>Giới tính</label>
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
            <div className='register-to-receive-annoucement'>
                <h2>Đăng ký nhận bản tin</h2>
                <div className='register-group'>
                    <input type="checkbox"></input>

                    <p>Đăng ký nhận bản tin theo các danh mục dưới đây</p>
                </div>

            </div>
        </form>
    )
}

export default InfoUser