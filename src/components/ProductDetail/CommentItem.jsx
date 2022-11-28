import React, { useState } from 'react'

import { Rating } from 'react-simple-star-rating'

const CommentItem = ({ data }) => {
    console.log(data)
    const image = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    return (
        <div className='comment-item'>
            <div className='comment-user-infor'>
                <div className='infor-up'>
                    <div className='image' style={{ backgroundImage: `url(${data.userAvatar})` }}>

                    </div>
                    <div className='user-detail'>
                        <div className='comment-username'>
                            {data.userFullName}
                        </div>
                        <div className='content-addition'>
                            Đã tham gia 10 năm
                        </div>
                    </div>
                </div>
                <div className='infor-down'>
                    <span> <i class="far fa-comment"></i>   Đã viết :{data.totalComment} đánh giá</span>
                </div>

            </div>
            <div className='comment-container'>
                <div className='comment-container-up'>
                    <Rating
                        initialValue={data.comRating}
                        size={30}
                        label
                        readonly
                        transition
                        fillColor='orange'
                        emptyColor='gray'
                        className='foo'
                    />
                    <span className='title-rating'>
                        {data.comRating === 0 && 'Vui lòng đánh giá'}
                        {data.comRating === 1 && 'Rất không hài lòng'}
                        {data.comRating === 2 && 'Không hài lòng'}
                        {data.comRating === 3 && 'Bình thường'}
                        {data.comRating === 4 && 'Hài lòng'}
                        {data.comRating === 5 && 'Cực kỳ hài lòng'}
                    </span>
                </div>

                <div className='comment-container-down'>
                    <div className='confirmed'>
                        <i class="fas fa-check-circle"></i>
                        <span> Đã mua hàng</span>
                    </div>
                    <div className='comment-content'>
                        {data.comContent}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default CommentItem