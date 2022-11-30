import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {list_cate_star_top} from '../../components/data'

const CategoryStartTop = () => {

  const {listCate} = useSelector(state => state.category)

  return (
    <div className='category-star-top'>
        <ul>
        {
          listCate.map((val,index) => (
                <Link to={`/${}`} key={index} >
                    <li>{val.catName}</li>
                </Link>   
            ))
        }
        </ul>
    </div>
  )
}

export default CategoryStartTop