import React from 'react'
import clx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

const BoxBook = ({data,title,nameCate}) => {

    const dispatch = useDispatch()
    const {  } = useSelector(state => state.product)

  return (
    <div className="box-content-book">
        
            <span className="title">{title}</span>

            <div className={nameCate % 2 === 0 ? `box-book  new-book` : `box-book good-book`}>
        {
            data.map((book,idx) =>(
                <div className="item" key={idx}>
                    <div className="image"><img src={book.img} alt="" /></div>

                    <div className="content">
                        <p className="name">{book.name}</p>
                        <p className='author'>{book.author}</p>
                        <p className='description'>{book.description}</p>
                        
                        <div className="box-buy">
                            <span className='promotion'>-{book.promotion}%</span>
                            <span className='price-old'>{book.priceOld.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span>
                            </span>
                            <span className='price-new'>{book.priceNew.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span></span>
                        </div>
                            <button>Mua ngay</button>
                    </div>
                
                </div>
            ))
        }
            </div>
    </div>
  )
}

export default BoxBook
