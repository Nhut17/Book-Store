import React from 'react'
import ItemSelect from './ItemSelect'
import './BoxSelect.scss'

const ListSelect = ({listSelect}) => {
  return (
    <div className='list-select'>
        {
          listSelect && 
          listSelect.map(dat)
        }
    </div>
  )
}

export default ListSelect
