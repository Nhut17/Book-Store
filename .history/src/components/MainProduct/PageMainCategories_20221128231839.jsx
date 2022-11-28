import React from 'react'
import PageCategoriesLeft from './PageCategoriesLeft'
import PageCategoriesRight from './PageCategoriesRight'

const PageMainCategories = ({listProduct}) => {
  return (
    <div className='page-main-cate'>

        <PageCategoriesRight listProduct={listProduct} />

    </div>
  )
}

export default PageMainCategories