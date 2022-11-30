import React, { useEffect } from 'react'
import clx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCate } from '../../redux/reducer/productSlice'

const BoxBook = ({data,title,nameCate}) => {

   

  return (
    <div className="box-content-book">
        
            <span className="title">{title}</span>

            <div className={nameCate % 2 === 0 ? `box-book  new-book` : `box-book good-book`}>
        {
            data?.slice(0,1)?.map((book,idx) =>(
                <div className="item" key={idx}>
                    <div className="image"><img src={book?.proImage} alt="" /></div>

                    <div className="content">
                        <p className="name">{book?.proName}</p>
                        <p className='author'>{book?.author}</p>
                        <p className='description'>{book?.proDescription}</p>
                        
                        <div className="box-buy">
                        {
                            book.proSale > 0 && 
                            <>
                            </>
                        }
                            
                            <span className='price-new'>{book?.curPrice?.toString()
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
