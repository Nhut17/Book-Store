import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedAuthor = () => {
  return (
    <div className='feature-author'>
        <span className="title">Tác Giả Nổi Bật</span>

        <div className="box-author">
            <div className="info-author">
                <div className="image"><img src="https://www.vinabook.com/images/thumbnails/author/210x/360353_129910542144506789460598800290180602601678n1.jpg" alt="" /></div>
                <div className="content-author">
                    <span className="name">Nguyên Phong</span>
                    <p className="description">Nguyên Phong tên thật là Vũ Văn Du, sinh năm 1950 tại Hà Nội. Năm 1968, ông rời khỏi Việt Nam, sang Hoa Kỳ du học hai nghành Sinh vật học và Điện toán, sau đó ông sống và làm việc tại Hoa Kỳ cho đến nay.Bên cạnh vai trò là một nhà khoa học, Nguyên Phong còn là dịch giả của hàng loạt sách về văn hóa và tâm linh phương Đông rất nổi tiếng. Trong số đó, có thể kể đến: Hành Trình Về Phương Đông, Ngọc Sáng Trong Hoa Sen, Bên Rặng Tuyết Sơn, Hoa Sen Trên Tuyết, Hoa Trôi Trên Sóng Nước, Trở Về Từ Xứ Tuyết, Minh Triết Trong Đời Sống Ăn Uống, Đường Mây Qua Xứ Tuyết…</p>
                   <Link to='/'>
                    <span className='read-more'>Xem thêm</span>
                   </Link>
                </div>
            </div>

            <div className="top-author-book">
                <div className="item">
                    <img src="https://www.vinabook.com/images/thumbnails/product/115x/369281_huyen-thuat-va-cac-dao-si-tay-tang.jpg" alt="" />
                    <Link to='/'>
                        <span className="name">Huyền Thuật Và Các Đạo Sĩ Tây Tạng</span>
                    </Link>
                </div>
                <div className="item">
                    <img src="https://www.vinabook.com/images/thumbnails/product/115x/369281_huyen-thuat-va-cac-dao-si-tay-tang.jpg" alt="" />
                    <Link to='/'>
                        <span className="name">Huyền Thuật Và Các Đạo Sĩ Tây Tạng</span>
                    </Link>
                </div>
                <div className="item">
                    <img src="https://www.vinabook.com/images/thumbnails/product/115x/369281_huyen-thuat-va-cac-dao-si-tay-tang.jpg" alt="" />
                    <Link to='/'>
                        <span className="name">Huyền Thuật Và Các Đạo Sĩ Tây Tạng</span>
                    </Link>
                </div>
            </div>

        </div>

    </div>
  )
}

export default FeaturedAuthor
