import React from 'react'

const ItemSelect = ({data}) => {
  return (
    <div className='item-select' key={data.id}>
        <p className="content-select">
            {data.catName}
        </p>
    </div>
  )
}

export default ItemSelect
