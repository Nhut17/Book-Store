import React from 'react'
import { Link } from 'react-router-dom'

const ContentProductMainInfo = ({data}) => {
  return (
    <div className='content-product-info'>
        <p className="name">{data.proname}</p>
        <p className="author">Tác giả: <Link className='act-name' to='/'>{data.author}</Link></p>
        <p className="publisher">Nhà xuất bản: {data.publisher}</p>
        <p className="producer">Nhà phát hành: <Link className='act-name' to='/'>{data.producer}</Link></p>
        <p className="description">{data.description}</p>
        <p className='see-more'>Xem thêm</p>
        <div className="info-more">
            <p className="info-attach">Thông tin kèm theo</p>
            <p>
                <i class="fa-solid fa-circle-check ic"></i>
                <span>Miễn phí giao hàng toàn quốc cho Đơn hàng từ 250.000đ (Áp dụng từ 2/2/2022)</span>
            </p>
        </div>

    </div>
  )
}

export default ContentProductMainInfo
