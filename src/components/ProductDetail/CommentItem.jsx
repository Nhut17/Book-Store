import React from 'react'
const CommentItem = ({ data }) => {
    return (
        <div className='comment-item'>
            <div className='comment-username'>
                {data.userFullName}
            </div>
            <div className='comment-content'>
                {data.comContent}
            </div>
            <div className='comment-rate'>
                Đánh giá : {data.comRating} sao
            </div>
        </div>
    )
}
export default CommentItem