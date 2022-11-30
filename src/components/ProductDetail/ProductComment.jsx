// import { getCommentById } from '../../redux/reducer/commentSlice'
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from 'react-router-dom';
// import CommentItem from './CommentItem';
// const ProductComment = () => {

//     const { listCommentById } = useSelector(state => state.comment)

//     const dispatch = useDispatch()
//     const { id } = useParams()

//     useEffect(() => {
//         // dispatch(getCommentByIdBasedRating(data))
//         dispatch(getCommentById(id))
//     }, [])
//     return (
//         <div className='product-comment'>
//             {/* {listCommentById.map(item => {
//                 <CommentItem data={item} />
//             })} */}
//             <div className='rating-group'>
//                 {arrRating.map(item => {
//                     return (
//                         <div key={item.id}>
//                             <Checkbox
//                                 icon={<CircleUnchecked />}
//                                 checkedIcon={<CircleCheckedFilled />}
//                                 checked={selectedRate === item.id}
//                                 onChange={() => {
//                                     setSelectedRate(item.id)
//                                 }}
//                             />
//                             <label>{item.name}</label>
//                         </div>
//                     )
//                 })}
//             </div>
//             <CommentBasedRating selectedRate={selectedRate} />
//         </div>
//     )
// }
// export default ProductComment
import { getCommentById, getCommentByIdBasedRating } from '../../redux/reducer/commentSlice'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import CommentItem from './CommentItem';
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import CommentBasedRating from './CommentBasedRating';
const ProductComment = () => {

    const [selectedRate, setSelectedRate] = useState(0)

    const { listCommentByIdBasedRating, listCommentById } = useSelector(state => state.comment)
    console.log('get selectedRate', selectedRate)

    const dispatch = useDispatch()
    const { id } = useParams()
    const arrRating = [
        {
            id: 0,
            name: 'Tất cả đánh giá',

        },
        {
            id: 1,
            name: '1 sao',

        },
        {
            id: 2,
            name: '2 sao',
        },
        {
            id: 3,
            name: '3 sao',
        },
        {
            id: 4,
            name: '4 sao',
        },
        {
            id: 5,
            name: '5 sao',
        }
    ]
    const data = {
        productId: id,
        rating: selectedRate
    }
    useEffect(() => {
        dispatch(getCommentByIdBasedRating(data))
    }, [])
    useEffect(() => {
        dispatch(getCommentById(id))
    }, [])
    const handleLoadingComment = (selectedRate) => {
        setSelectedRate(selectedRate)
        dispatch(getCommentByIdBasedRating({
            productId: id,
            rating: selectedRate
        }))
    }
    return (
        <div className='product-comment'>
            <div className='rating-group'>
                {arrRating.map(item => {
                    return (
                        <div key={item.id}>
                            <Checkbox
                                icon={<CircleUnchecked />}
                                checkedIcon={<CircleCheckedFilled />}
                                checked={selectedRate === item.id}
                                onChange={() => handleLoadingComment(item.id)}
                            />
                            <label>{item.name}</label>
                        </div>
                    )
                })}
            </div>
            <CommentBasedRating selectedRate={selectedRate} listCommentByIdBasedRating={listCommentByIdBasedRating} listCommentById={listCommentById} />

        </div>
    )
}
export default ProductComment