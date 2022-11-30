import React from 'react'
import { list_cate_sub } from '../data'
import { Link } from 'react-router-dom'

const BoxWidget = () => {

    const { listAuthor} = useSle

  return (
    <div className='box-widget'>
        <ul>
            <li className="title">TÁC GIẢ</li>
            {
                list_cate_sub.map((val,index) => (
                    <Link to={val.linkTo} key={index}>
                    <li>
                        <span className="content">{val.content}</span>
                        <span className="quantity">({val.quantity})</span>
                    </li>
                    </Link>
                ))
            }
            <li className='see-more'>Xem Tất Cả</li>
        </ul>
    </div>
  )
}

export default BoxWidget