import React from 'react'
import { Link } from 'react-router-dom'
import ProductComment from './ProductComment'
const ContentProduct = ({ data }) => {
    return (
        <div className='content-product'>
            <div className="title">
                <span>GIỚI THIỆU SÁCH</span>
                <span>THÔNG TIN CHI TIẾT</span>
                <span>ĐÁNH GIÁ & BÌNH LUẬN</span>
            </div>
            <div className="content">
                <p className="name">{data.proName}</p>

                <div className="group">
                    <div className="info-author">
                        <p className="info">Thông tin tác giả</p>
                        <p className="name-author">{data.author}</p>
                        <Link to='/'><p className="to-author">{'>>'} Vào trang riêng của tác giả </p></Link>
                        <Link to='/'><p className="to-author">{'>>'} Xem tất cả các sách của tác giả </p></Link>
                    </div>
                    <p className="cnt">{data.proContent}</p>
                </div>

              

            </div>
        </div>
    )
}

export default ContentProduct
