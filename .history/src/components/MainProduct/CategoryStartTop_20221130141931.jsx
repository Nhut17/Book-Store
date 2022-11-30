import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {list_cate_star_top} from '../../components/data'

const CategoryStartTop = () => {

  const {listCate} = useSelector(state => state.category)

  return (
    <React.Fragment>
    <nav className='list-category'>
    <ul className='nav-cate'>
      <li>
        <i className="fa-solid fa-bars ic-nav"></i>
      </li>
      <li >
        <span>Danh Mục Sách</span>
      </li>
      <li>
        <i className="fa-solid fa-angle-down ic-angle-down"></i>
      </li>
    </ul>


     
 

  </nav>
    <div className='category-star-top'>
    
    <ul>
    {
      listCate.map((val,index) => (
        <Link to={`/${val.catName}/${val.id}`} key={index} reloadDocument>
        <li>{val.catName}</li>
        </Link>   
        ))
      }
      </ul>
      </div>
      )
    </React.Fragment>
}

export default CategoryStartTop