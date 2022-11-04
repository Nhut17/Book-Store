import React from 'react'
const ConfirmedAddressAndServices = () => {
    return (
        <div className='confirmed-address-and-services'>
            <div className='address'>
                <div className='title'>
                    <span className='tilte-address'>Địa chỉ giao hàng</span>
                    <span className='change-address'>
                        <i class="fa-solid fa-pen-to-square"></i>
                        Sửa
                    </span>
                </div>
                <p className='customer-name'>Nguyễn Trần Đăng Khoa</p>
                <p>98/30 Linh Đông, Linh Đông, Thủ Đức</p>
                <p>Hồ Chí Minh, Việt Nam</p>
                <p className='customer-phone'>0948433713</p>
            </div>
            <div className='delivery-note'>
                <span>GHI CHÚ GIAO HÀNG</span>
                <p>Thời gian giao hàng dự kiến 1-3 ngày</p>
            </div>
            <div className='payment'>
                <div className='title'>
                    <span className='tilte-address'>Hình thức thanh toán</span>
                    <span className='change-address'>
                        <i class="fa-solid fa-pen-to-square"></i>
                        Sửa
                    </span>
                </div>
                Thẻ ATM có Internet Banking
            </div>
            <div className='bocsach-service'>
                <div className='title'>
                    <span className='tilte-address'>Dịch vụ bọc sách</span>
                    <span className='change-address'>
                        <i class="fa-solid fa-pen-to-square"></i>
                        Sửa
                    </span>
                </div>

                <ul className='bocsach'>
                    <li> 2 x Muôn Kiếp Nhân Sinh - Many Times, Many Lives - Tập 2</li>
                    <li>1 x Thay Đổi Cuộc Sống Với Nhân Số Học</li>
                </ul>



            </div>
        </div>
    )
}
export default ConfirmedAddressAndServices