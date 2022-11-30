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
                    <p className="name">{data.name}</p>

                    <div className="group">
                        <div className="info-author">
                            <p className="info">Thông tin tác giả</p>
                            <p className="name-author">{data.author}</p>
                            <Link to='/'><p className="to-author">{'>>'} Vào trang riêng của tác giả </p></Link>
                            <Link to='/'><p className="to-author">{'>>'} Xem tất cả các sách của tác giả </p></Link>


                        </div>
                        <p className="cnt">{data.content}</p>

                    </div>


                    <div className="info-detail">
                        <p className="title-info">Thông tin chi tiết</p>
                        <div className="flex list-info">

                            <ol>
                                <li>Tác giả: </li>
                                <li>Nhà phát hành: </li>
                                <li>Khối lượng: </li>
                                <li>Định dạng: </li>
                                <li>Ngày phát hành: </li>
                            </ol>

                            <ol>
                                <li>Nhà xuất bản: </li>
                                <li>Mã Sản phẩm: </li>
                                <li>Ngôn ngữ: </li>
                                <li>Kích thước: </li>
                                <li>Số trang: </li>
                            </ol>
                        </div>
                    </div>

                    <div className="comment-feedback">
                        <p className="title-feedback">Nhận xét từ khách hàng</p>

                        <div className="box-rating">

                            <div className="rating">
                                <span>Đánh giá trung bình</span>
                                <span className='reviews'>(0 - người đánh giá)</span>
                                <span className="rates">0,0</span>

                            </div>

                            <div className="star-rating">
                                <span>5 <i className="fa-solid fa-star ic"></i></span>
                                <span>4 <i className="fa-solid fa-star ic"></i></span>
                                <span>3 <i className="fa-solid fa-star ic"></i></span>
                                <span>2 <i className="fa-solid fa-star ic"></i></span>
                                <span>1 <i className="fa-solid fa-star ic"></i></span>
                            </div>
                        </div>

                    </div>
                    <ProductComment />
                </div>

            </div>
        
    )
}

export default ContentProduct
