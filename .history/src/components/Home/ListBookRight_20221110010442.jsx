import React from 'react'

const ListBookRight = ({list_product,title}) => {
  return (
    <div className='list-book-right'>
        <span className="title">{title}</span>
        <ul>
            {
                list_product?.slice(0,10).map(item => (
                    <li key={item.id}>
                        <div className="img"><img src={item.proImage} alt="" /></div>
                        <div className="content">
                            <p className='name'>{item.proName}</p>
                            <p classproName='author'>{item.author}</p>
                            <span className="price-old">{item.priceOld.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span></span>
                            <span className="price-new">{item.priceNew.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span>
                                    </span>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ListBookRight
