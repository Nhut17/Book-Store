import React, { useEffect, useState } from "react";
// import { React, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import InfoUser from './InfoUser'
import ProfileImage from './ProfileImage'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { getUser, changeUserAvatar, changeUserProfile } from "../../redux/reducer/userSlice";
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";

const MainProfile = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)
  console.log('currentUser', currentUser)
  const { register, handleSubmit } = useForm({ defaultValues: {} });

  useEffect(() => {
    dispatch(getUser())
  }, [])
  const genderArr = [
    {
      id: 1,
      gender: 'male',
    },
    {
      id: 2,
      gender: 'female',
    }
  ]
  const [userDoB, setUserDoB] = useState(currentUser?.userDob)
  const [genderCheck, setGenderCheck] = useState(currentUser?.userGender)
  const [uploadImage, setUploadImage] = useState(currentUser?.avatar)
  const [previewImage, setPreviewImage] = useState(currentUser?.avatar)
  const handleOnChangeImage = (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      setUploadImage(file)
      setPreviewImage(URL.createObjectURL(file));
    }
  }
  const handleOnSubmit = (formData) => {
    // formData.append('userGender', genderCheck)
    const form = {
      fullname: formData.fullname,
      userAddress: formData.userAddress,
      userGender: genderCheck,
      userDob: formData.userDob,
      userPhone: formData.userPhone
    }
    console.log('formData', form)

    dispatch(changeUserAvatar(uploadImage))
    dispatch(changeUserProfile(form))
    toast("Thay đổi thông tin thành công!",
      {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
  }
  return (
    <div className='main-profile'>
      <ToastContainer />
      <span className="title">Thông tin cá nhân</span>
      <span className="hello">Xin Chào </span>
      <div className='group-infor'>
        <div className='profile-image'>
          <div className='preview-img-container'>
            <input className='preview-img' type='file'
              style={{ backgroundImage: `url(${previewImage})` }}
              onChange={(event) => handleOnChangeImage(event)} />
          </div>
        </div>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="input-group">
            <div className=' input-common input-name'>
              <label>Họ và tên</label>
              <input
                type="text"
                placeholder='Họ và tên'
                defaultValue={currentUser?.fullName}
                {...register('fullname')}></input>
            </div>
            {/* <div className='input-common input-email'>
              <label>Email</label>
              <input type="text" placeholder='Email'
                defaultValue={currentUser?.userEmail}
                {...register('userEmail')}></input>
            </div> */}
            <div className='input-common input-password'>
              <label>Địa chỉ</label>
              <input type="text" placeholder='Địa chỉ'
                defaultValue={currentUser?.userAddress}
                {...register('userAddress')}></input>
            </div>
            <div className='input-common input-re-password'>
              <label>Số điện thoại</label>
              <input type="text" placeholder='Số điện thoại'
                defaultValue={currentUser?.userPhone}
                {...register('userPhone')}></input>
            </div>
            <div className="input-common input-dob">
              <label>Ngày sinh</label>
              <input type="date" className='inpt'
                defaultValue={userDoB}
                onChange={(event) => setUserDoB(event.target.value)}
                {...register('userDob')} />
            </div>
          </div >
          <div className="gender mg">
            <label>Giới tính</label>
            <div className="radio-group"
            >
              {genderArr.map(gender => (
                <div key={gender.id} className='male'
                >
                  <input type="radio"
                    onChange={() => setGenderCheck(gender.gender)}
                    checked={genderCheck === gender.gender}
                  />
                  <label >{gender.gender === 'male' ? 'Nam' : 'Nữ'}</label>
                </div>
              ))}
            </div>

          </div>
          <button
            type="submit" className='save'>LƯU</button>
        </form >

      </div >


      <Link to='/history' >
        <button className='history'>Lịch sử mua hàng</button>
      </Link>

      <Link to='/profile/sendEmailOTP' reloadDocument>
      <button className="re-password">Thay đổi mật khẩu</button>
        </Link>

    </div>
  )
}

export default MainProfile 