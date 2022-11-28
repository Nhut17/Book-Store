import React, { useEffect, useState } from "react";
// import { React, useState } from 'react'

import InfoUser from './InfoUser'
import ProfileImage from './ProfileImage'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { getUser, changeUserAvatar } from "../../redux/reducer/userSlice";
import { useSelector } from 'react-redux';

const MainProfile = () => {
  const dispatch = useDispatch()
  const [uploadImage, setUploadImage] = useState(null)
  // const [uploadImage, setUploadImage] = useState('')
  const currentUser = useSelector(state => state.user.currentUser)
  useEffect(() => {
    dispatch(getUser())
  }, [])
  const handleChangeAvatar = () => {
    dispatch(changeUserAvatar(uploadImage))
  }
  return (
    <div className='main-profile'>
      <span className="title">Thông tin cá nhân</span>

      <span className="hello">Xin Chào </span>
      <div className='group-infor'>
        <InfoUser currentUser={currentUser} />
        <ProfileImage userImage={currentUser.avatar} setUploadImage={setUploadImage} />
      </div>

      <button className='save'>LƯU</button>
      <Link to='/history' onClick={handleChangeAvatar}>
        <button className='history'>Lịch sử mua hàng</button>

      </Link>
    </div>
  )
}

export default MainProfile 