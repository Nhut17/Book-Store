import React from 'react'
import InfoUser from './InfoUser'
import ProfileImage from './ProfileImage'
const MainProfile = () => {
  return (
    <div className='main-profile'>
      <span className="title">Thông tin cá nhân</span>

      <span className="hello">Xin Chào </span>
      <div className='group-infor'>
        <InfoUser />
        <ProfileImage />
      </div>

      <button className='save'>LƯU</button>

    </div>
  )
}

export default MainProfile 