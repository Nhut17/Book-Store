import React from 'react'
import { Link } from 'react-router-dom'
import {list_cate_star_top} from '../../components/data'

const CategoryStartTop = () => {

  const {} = useSelect

  return (
    <div className='category-star-top'>
        <ul>
        {
            list_cate_star_top.map((val,index) => (
                <Link to={val.linkTo} key={index} >
                    <li>{val.title}</li>
                </Link>   
            ))
        }
        </ul>
    </div>
  )
}

export default CategoryStartTop