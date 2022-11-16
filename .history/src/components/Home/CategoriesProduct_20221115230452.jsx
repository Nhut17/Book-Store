import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCategories } from '../../redux/reducer/categorySlice'


const CategoriesProduct = () => {

    const dispatch= useDispatch()
    const listCate = useSelector(state => state.category.listCate)


    useEffect(() => {
        dispatch(getAllCategories())
    },[])

  return (
    <div className='cate-product'>
        
        <ul>
            {
              listCate &&  
                listCate.map(category => (
                    <Link  to={`${category.catName}/${category.id}`}>
                    <li key={category.id}>
                        <span>{category.catName}</span>
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
