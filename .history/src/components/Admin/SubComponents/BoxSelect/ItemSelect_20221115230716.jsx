import React from 'react'

const ItemSelect = ({data}) => {
  return (
    <div className='item-select'>
        <p className="content-select">
            {data.catnam}
        </p>
    </div>
  )
}

export default ItemSelect
