import React, { useEffect } from 'react'
import clx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCate } from '../../redux/reducer/productSlice'

const BoxBook = ({cateId,title,nameCate}) => {

    const dispatch = useDispatch()
    const { listProductCate } = useSelector(state => state.product)

    console.log('CateId: ' + cateId)
    console.log(''listProductCate)

    useEffect(() =>{

        dispatch(getProductCate(cateId))

    },[])

  return (
    <div className="box-content-book">
        
            <span className="title">{title}</span>

            <div className={nameCate % 2 === 0 ? `box-book  new-book` : `box-book good-book`}>
        {
            listProductCate?.slice(0,1)?.map((book,idx) =>(
                <div className="item" key={idx}>
                    <div className="image"><img src={book.proImage} alt="" /></div>

                    <div className="content">
                        <p className="name">{book.proName}</p>
                        <p className='author'>{book.author}</p>
                        <p className='description'>{book.proDescription}</p>
                        
                        <div className="box-buy">
                            <span className='promotion'>-{book.proSale}%</span>
                            <span className='price-old'>{book.proPrice.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span>
                            </span>
                            <span className='price-new'>{book.curPrice.toString()
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
