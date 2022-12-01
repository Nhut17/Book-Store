import React from 'react'
import { useState } from 'react'
import { list_product } from '../../components/data'

const ProductRecommand = () => {

    const [totalPrice, setTotalPrice] = useState(0)
    const [checked, setChecked] = useState(0)

    const handleClick = (id) => {
        // const sum = 
        // setChecked(id)
    }


    return (
        <div className='product-recommand'>
            <p className="title">Sách nên mua kèm với sách này</p>
            <div className="main-recommand">
                {
                    list_product.slice(0, 3).map(data => (

                        <div className="item" key={data.id}>
                            <img src={data.img} alt="" />
                            <span>-{data.promotion}%</span>

                        </div>


                    ))
                }

            </div>
            <div className="total-price">
                <span className="total">Tổng giá bán <span className='price'>{totalPrice.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span></span>
                <button><i className="fa-solid fa-cart-shopping ic"></i>MUA NGAY</button>
            </div>



            <div className="list-checkbox">
                {
                    list_product.slice(0, 3).map(data => (
                        <div className="check-name-and-price" key={data.id}

                        >
                            <input type="checkbox"
                                checked={true}
                                onClick={() => handleClick(data.priceNew)} />
                            <span className="name">{data.name}</span>
                            <span className="price">{data.priceNew.toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span>
                        </div>
                    ))
                }
            </div>





        </div>
    )
}

export default ProductRecommand
