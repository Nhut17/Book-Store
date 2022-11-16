import { getCommentById } from '../../redux/reducer/commentSlice'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import CommentItem from './CommentItem';
const ProductComment = () => {
    const listCommentById = useSelector(state => state.comment.listCommentById)
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(getCommentById(id))
    }, [])
    console.log('log', listCommentById)
    return (
        <div className='product-comment'>
            {listCommentById.map(item => (
                <CommentItem data={item} />
            )
            )}
        </div>
    )
}
export default ProductComment