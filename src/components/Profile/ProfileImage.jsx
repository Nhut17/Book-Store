import { React, useState } from 'react'
const ProfileImage = () => {
  const [uploadImage, setUploadImage] = useState('')
  const handleOnChangeImage = (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
        let objectUrl = URL.createObjectURL(file);
        setUploadImage(objectUrl)
    }
  }
  return (
    <div className='profile-image'>
      <div className='preview-img-container'>
        <input id='preview-img' type='file' hidden
          onChange={(event) => handleOnChangeImage(event)} />
        <label className='label-image' htmlFor='preview-img'>Tải ảnh<i className='fas fa-upload'></i></label>
        <div className='preview-image'
          style={{ backgroundImage: `url(${uploadImage})` }}
        >
        </div>
      </div>
    </div>
  )
}

export default ProfileImage 