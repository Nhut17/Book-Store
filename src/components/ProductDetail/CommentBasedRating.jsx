
import { getCommentById, getCommentByIdBasedRating } from '../../redux/reducer/commentSlice'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import CommentItem from './CommentItem';
const CommentBasedRating = ({ selectedRate, listCommentById, listCommentByIdBasedRating }) => {

    console.log('get list', listCommentByIdBasedRating)
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