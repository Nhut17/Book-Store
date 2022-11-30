
import { getCommentById, getCommentByIdBasedRating } from '../../redux/reducer/commentSlice'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import CommentItem from './CommentItem';
const CommentBasedRating = ({ selectedRate }) => {
    const { listCommentByIdBasedRating, listCommentById } = useSelector(state => state.comment)

    const dispatch = useDispatch()
    const { id } = useParams()
    const data = {
        productId: 3,
        rating: 5
    }

    useEffect(() => {
        dispatch(getCommentByIdBasedRating(data))
        // dispatch(getCommentById(id))
    }, [])

    // console.log('get list', listCommentByIdBasedRating)
    // console.log('get selectedRate', selectedRate)
    return (
        <div>
            {selectedRate !== 0 ?
                listCommentByIdBasedRating.map(item => (
                    <CommentItem data={item} />))
                :
                listCommentById.map(item => (
                    <CommentItem data={item} />))}
        </div>
    )
}
export default CommentBasedRating