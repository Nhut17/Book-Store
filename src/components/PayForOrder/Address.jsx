import React from 'react'
const Address = () => {
    return (
        <div className='pfo-address'>
            <div className='title'>
                <span className='tilte-address'>Địa chỉ giao hàng</span>
                <span className='change-address'>
                    <i className="fa-solid fa-pen-to-square"></i>
                    Sửa
                </span>
            </div>
            <div className="input-group">
                <div className=' input-common input-name'>
                    <label>Họ và tên</label>
                    <input type="text" placeholder='Họ và tên'></input>
                </div>
                <div className='input-common input-phone'>
                    <label>Điện thoại</label>
                    <input type="text" placeholder='Điện thoại'></input>
                </div>
                <div className='input-common input-nation'>
                    <label>Quốc gia</label>
                    <input type="text" placeholder='Quốc gia'></input>
                </div>
                <div className='input-common input-province'>
                    <label>Tỉnh thành</label>
                    <input type="text" placeholder='Tỉnh thành'></input>
                </div>
                <div className='input-common input-distric'>
                    <label>Quận huyện</label>
                    <input type="text" placeholder='Quận huyện'></input>
                </div>
                <div className='input-common input-ward'>
                    <label>Phường xã</label>
                    <input type="text" placeholder='Phường xã'></input>
                </div>
                <div className='input-common input-building'>
                    <label>Tên tòa nhà</label>
                    <input type="text" placeholder='Tên tòa nhà'></input>
                </div>
                <div className='input-common input-number'>
                    <label>Số nhà</label>
                    <input type="text" placeholder='Số nhà'></input>
                </div>
                <div className='input-common input-street    '>
                    <label>Tên Đường</label>
                    <input type="text" placeholder='Tên Đường'></input>
                </div>
                <div className='down-content'>
                    <div className='button-gr'>
                        <button className='save'>Lưu</button>
                        <button className='cancel'>Hủy bỏ</button>
                    </div>
                    <span>Phí vận chuyển: miễn phí</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='delivery-note'>
                        <div className='title'>ghi chú giao hàng</div>
                        <textarea></textarea>
                    </div>

                </div>

                {/* <div className="input-username">
                        <label>efwe</label>
                        <input type="text" placeholder='Tên Người Dùng' />
                    </div>
                    <div className="input-phone">
                        <i className="fa-solid fa-phone ic"></i>
                        <input type="text" placeholder='Số Điện Thoại' />
                    </div>
                    <div className="input-email">
                        <i className="fa-solid fa-envelope ic"></i>
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="input-password">
                        <i className="fa-solid fa-lock ic"></i>
                        <input type="text" placeholder='Mật Khẩu' />
                    </div>
                    <div className="input-repeat-password">
                        <i className="fa-solid fa-lock ic ic-repeat-pass"></i>
                        <input type="text" placeholder='Nhập Lại Mật Khẩu' />
                    </div> */}
            </div>

        </div>
    )
}
export default Address