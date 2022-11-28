import { React, useState } from 'react'
const ProfileImage = ({ userImage, setUploadImage }) => {
  return (
    <div className='profile-image'>
      <div className='preview-img-container'>
        <input id='preview-img' type='file' hidden
          onChange={(e) => setUploadImage(e.target.files[0])} />
        <label className='label-image' htmlFor='preview-img'>Tải ảnh<i className='fas fa-upload'></i></label>
        <div className='preview-image'
          style={{ backgroundImage: `url(${userImage})` }}
        >
        </div>
      </div>
    </div>
  )
}

export default ProfileImage 