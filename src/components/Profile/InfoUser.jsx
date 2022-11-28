import { data } from 'jquery';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
const InfoUser = ({ currentUser }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const [userDoB, setUserDoB] = useState(currentUser?.userDob)
    const handleOnSubmit = () => {

    }
    console.log('log dob',userDoB)
    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="input-group">
                <div className=' input-common input-name'>
                    <label>Họ và tên</label>
                    <input
                        type="text"
                        placeholder='Họ và tên'
                        value={currentUser?.fullName}
                        {...register('fullname')}></input>
                </div>
                <div className='input-common input-email'>
                    <label>Email</label>
                    <input type="text" placeholder='Email'
                        value={currentUser?.userEmail}
                        {...register('userEmail')}></input>
                </div>
                <div className='input-common input-password'>
                    <label>Địa chỉ</label>
                    <input type="text" placeholder='Địa chỉ'
                        value={currentUser?.userAddress}
                        {...register('userAddress')}></input>
                </div>
                <div className='input-common input-re-password'>
                    <label>Số điện thoại</label>
                    <input type="text" placeholder='Số điện thoại'
                        value={currentUser?.userPhone}
                        {...register('userPhone')}></input>
                </div>
                <div className="input-common input-dob">
                    <label>Ngày sinh</label>
                    <input type="date" className='inpt'
                        defaultValue={userDoB}
                        onChange={(event) => setUserDoB(event.target.value)}
                        {...register('userDob')} />
                </div>
            </div>
            <div className="gender mg">
                <label>Giới tính</label>
                <div className="radio-group">
                    <div className="male">
                        <input type="radio"
                            checked={currentUser?.userGender == 'male' ? true : false}
                        />

                        <label >Nam</label>
                    </div>
                    <div className="female">
                        <input type="radio"
                            checked={currentUser?.userGender == 'female' ? true : false} />
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