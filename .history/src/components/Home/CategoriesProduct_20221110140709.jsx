import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const CategoriesProduct = () => {

    const dispatch= useDispatch()
    const listCart = u


  return (
    <div className='cate-product'>
        
        <ul>
            {
                list_cate.map(category => (
                    <Link key={category.id} to={`${category.linkTo}/${category.id}`}>
                    <li >
                        <span>{category.name}</span>
                        <i class="fa-solid fa-angle-right ic"></i>
                    </li>
                    </Link>
                ))
            }
        </ul>
       
    </div>
  )
}

export default CategoriesProduct
