import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCategories } from '../../redux/reducer/categorySlice'


const CategoriesProduct = () => {

    const dispatch= useDispatch()
    const listCart = useSelector(state => state.category.listCart)


    useEffect(() => {
        dispatch(getAllCategories())
    },[])

  return (
    <div className='cate-product'>
        
        <ul>
            {
                listCart.map(category => (
                    <Link  to={`${category.cateName}/${category.id}`}>
                    <likey={category.id}>
                        <span>{category.catName}</span>
                        <i class="fa-solid fa-angle-right ic"></i>
                    </likey=>
                    </Link>
                ))
            }
        </ul>
       
    </div>
  )
}

export default CategoriesProduct
