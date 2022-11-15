import React from 'react'
import ItemSelect from './ItemSelect'
import './BoxSelect.scss'

const ListSelect = ({listSelect}) => {
  return (
    <div className='list-select'>
        {
        
          listSelect.map(data => (
            <ItemSelect data={data} />
          ))
        }
    </div>
  )
}

export default ListSelect
