import React from 'react'
import PageCategoriesLeft from './PageCategoriesLeft'
import PageCategoriesRight from './PageCategoriesRight'

const PageMainCategories = () => {
  return (
    <div className='page-main-cate'>

        <PageCategoriesLeft />
        <PageCategoriesRight list />

    </div>
  )
}

export default PageMainCategories