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
