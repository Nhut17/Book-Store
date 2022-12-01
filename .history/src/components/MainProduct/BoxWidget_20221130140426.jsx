import React, { useEffect } from 'react'
import { list_cate_sub } from '../data'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAuthor } from '../../redux/reducer/authorSlice'

const BoxWidget = () => {

    const { listAuthor} = useSelector(state => state.author)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllAuthor())
    },[])

  return (
    <div className='box-widget'>
        <ul>
            <li className="title">TÁC GIẢ</li>
            {
                listAuthor?.slice(0,7).map((val,index) => (
                   
                    <li>
                        <span className="content">{val.content}</span>
                        <span className="quantity">({val.quantity})</span>
                    </li>
                   
                ))
            }
            <li className='see-more'>Xem Tất Cả</li>
        </ul>
    </div>
  )
}

export default BoxWidget