import React from 'react'
import ItemSelect from './ItemSelect'
import './BoxSelect.scss'

const ListSelect = ({ListSelect}) => {
  return (
    <div className='list-select'>
        <ItemSelect />
        <ItemSelect />
        <ItemSelect />
    </div>
  )
}

export default ListSelect
