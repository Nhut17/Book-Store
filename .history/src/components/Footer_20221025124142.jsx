import React from 'react'
import '../sass/Footer/footer.scss'

const Footer = () => {
  return (
    <footer>
       <div className="sign-up-email">
          <div className="container">

          <div className="content">
            <span>ĐĂNG KÝ NHẬN EMAIL</span>
            <span className='f-13'>Đăng ký nhận thông tin sách mới, sách bán</span>
          </div>

          <div className="input-group">
            <input className='name' type="text" placeholder='Tên của bạn' />
            <input className='email' type="email" placeholder='Nhập email của bạn' />
            <input className='cate-fav' type="text" placeholder='Thể loại yêu thích' />
            <button>ĐĂNG KÝ NGAY</button>
          </div>

          </div>

        </div>
    
        <div className="main-footer">

          <div className="container">

            <ul className="info-content">
              <li>
                  <h4>VỀ CÔNG TY</h4>
                  <span>Giới thiệu công ty</span>
                  <span>Tuyển dụng</span>
                  <span>Góc báo chí</span>
                  <span>Chương trình đại lý</span>
                  <span>Chính sách bảo mật</span>
                  <span>Chính sách đổi trả</span>
              </li>

              <li>
                  <h4>TRỢ GIÚP</h4>
                  <span>Quy định hạn sử dụng</span>
                  <span>Hướng dẫn mua hàng</span>
                  <span>Phương thức thanh toán</span>
                  <span>Phương thức vận chuyển</span>
                  <span>Các câu hỏi thường gặp</span>
                  <span>Ứng dụng đọc ebook</span>
              </li>

              <li>
                  <h4>TIN TỨC SÁCH</h4>
                  <span>Tin tức</span>
                  <span>Chân dung</span>
                  <span>Điểm sách</span>
                  <span>Phê bình</span>
              </li>

              <li>
                  <h4>CHẤP NHẬN THANH TOÁN</h4>
                  <div className="logo-brand">

                  <img src="https://www.vinabook.com/public/assets/img/visa.jpg" alt="" />
                  <img src="https://www.vinabook.com/public/assets/img/master_card.jpg" alt="" />
                  <img src="https://www.vinabook.com/public/assets/img/jcb.jpg" alt="" />
                  <img src="https://www.vinabook.com/public/assets/img/atm.jpg" alt="" />
                  <img src="https://www.vinabook.com/public/assets/img/cod.jpg" alt="" />
                  <img src="https://www.vinabook.com/public/assets/img/payoo.jpg" alt="" />
                  </div>

                  <h4 className='p-t-20'>THANH TOÁN AN TOÀN</h4>

                  <div className="logo-brand logo-pay">

                  <img src="https://www.vinabook.com/public/assets/img/verify_visa.jpg" alt="" />
                  <img src="https://www.vinabook.com/public/assets/img/mastercard_securecode.jpg" alt="" />
                  <img src="https://www.vinabook.com/public/assets/img/onepay.jpg" alt="" />

                  </div>
              </li>

              <li>
                  <h4>ĐỐI TÁC VẬN CHUYỂN</h4>
                  <div className="logo-brand logo-delivery">
                    
                  <img src="https://www.vinabook.com/public/assets/img/logovnb.png" alt="" />
                  <img src="https://www.vinabook.com/public/assets/img/vn-post.jpg" alt="" />
                  <img src="https://www.vinabook.com/public/assets/img/dhl.jpg" alt="" />
                  </div>
              </li>
                  
              <li>
                  <h4>ĐỐI TÁC BÁN HÀNG</h4>

                  <img src="https://www.vinabook.com/public/assets/img/lazada.jpg" alt="" />
                  <img src="https://www.vinabook.com/public/assets/img/shopee.jpg" alt="" />
                  <img src="https://www.vinabook.com/public/assets/img/amazon.jpg" alt="" />
              </li>

            </ul>

            <h3>THƯỜNG ĐƯỢC TÌM KIẾM</h3>

            <ul className="top-trend">
              <li>
                <span>truyện dan brown</span>
                <span>sách hay về gia đình</span>
                <span>sách học tiếng trung</span>
                <span>ách Blockchain</span>
                <span>sách khởi nghiệp</span>
                <span>sách quản lí nhân sự</span>
              </li>
              <li>
                <span>sách waren bufftet</span>
                <span>giáo trình tiếng anh</span>
                <span>tiểu thuyết tình yêu</span>
                <span>sách du học</span>
                <span>sách bán hàng</span>
                <span>sách về quản trị kinh doanh</span>
              </li>
              <li>
                <span>sách digital Marketing</span>
                <span>sách hay về kinh tế</span>
                <span>sách y học</span>
                <span>sách kỹ năng mềm</span>
                <span>sách về đầu tư chứng khoán</span>
                <span>sách tài chính</span>
              </li>
              <li>
                <span>truyện mới của nguyễn nhật ánh</span>
                <span>sách về đầu tư</span>
                <span>tủ sách gia đình</span>
                <span>sách làm giàu</span>
                <span>sách dạy nấu ăn</span>
                <span>sách hay cho thiếu nhi</span>
              </li>
              <li>
                <span>sách cho con</span>
                <span>sách doanh nhân</span>
                <span>sách dạy kỹ năng giao tiếp</span>
                <span>sách phong thủy cổ</span>
                <span>sách tâm lý về tình yêu</span>
                <span>sách tự học tiếng anh giao tiếp</span>
              </li>
            </ul>

          </div>

        </div>

        <div className="end-footer">

          <div className="container">

          <div className="company">
            <div className="notice"><img src="https://www.vinabook.com/images/thumbnails/images/222/83/logo_so_cong_thuong.png" alt="" /></div>
          
            <div className="info">
              <span className="title">CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ MÊ KÔNG COM</span>
              <span>Địa chỉ: 52/2 Thoại Ngọc Hầu, Phường Hòa Thạnh, Quận Tân Phú, Hồ Chí Minh</span>
              <span>MST: 0303615027 do Sở Kế Hoạch Và Đầu Tư Tp.HCM cấp ngày 10/03/2011</span>
              <span>Tel: 028.73008182 - Fax: 028.39733234 - Email: <span className='mail'>hotro@vinabook.com</span></span>
            </div>

          </div>

          <div className='system'>WEBSITE CÙNG HỆ THỐNG</div>

          <div className="logo" sty>
          <img src="https://www.vinabook.com/images/thumbnails/img/152/22/logo_hotdeal_2x.png" alt="" />
          <img src="https://www.vinabook.com/images/thumbnails/img/146/40/logo_yesgo_2x.png" alt="" />
          </div>

          </div>
        
        </div>

    </footer>
  )
}

export default Footer
 